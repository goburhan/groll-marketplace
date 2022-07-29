import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { MetaMask } from '@web3-react/metamask';
import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import { WalletConnect } from '@web3-react/walletconnect';
import { AppState } from '../../app/store'
import { checkResponse } from '../../utils/tools';
import store from '../../app/store';

import { metaMask } from '../../connectors/metamask'
import { coinbaseWallet } from '../../connectors/coinbasewallet'
import { walletConnect } from '../../connectors/walletconnect'
import { setLocalStorage } from '../../utils/local-storage';
import api from '../../api';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import Router from "next/router";


export const GET_CONFIG = 'config/getConfig';
export const CONNECT_WALLET = 'config/connectWallet';
export const USER_LOGIN = 'config/userLogin';
export const GET_USER_INFO = 'config/getUserInfo';
export const SIGNUP_USER = 'config/signUpUser';
export const SIGN_LOGIN = 'config/signLogin';
export const UPDATE_PROFILE = 'config/updateProfile';
function getDefaultConnector(defaultConnector): MetaMask | CoinbaseWallet | WalletConnect {
  switch (defaultConnector) {
    case 'metamask':
        console.log('default is metaMask');
        return metaMask;
      break;
    case 'coinbase':
        console.log('default is coinbaseWallet');
        return coinbaseWallet;
      break;
    case 'walletconnect':
        console.log('default is walletConnect');
        return walletConnect;
      break;

    default:
      return metaMask;
  }
}

export const getConfig = createAsyncThunk(
  GET_CONFIG,
  async (_, thunkAPI) => {
    try {
      return api("config.fetch").then((res) => {
        if (checkResponse(res)) {
          return res.data;
        }
      });
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  },
)



export const connectWallet = createAsyncThunk(
  CONNECT_WALLET,
  async (_: any, thunkAPI) => {
    try {
      // get default connector from users choice
      const defaultConnector = store.getState().defaultConnector;
      getDefaultConnector(defaultConnector).activate(_.chainId).then(async (result) => {
        console.log(result);
        store.dispatch(WEB3({ networkId: _.chainId, walletType: defaultConnector }));

      }).catch((err) => {
        console.log(err);
        toast(err);
      });
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  },
)

export const signUpUser = createAsyncThunk(
  SIGNUP_USER,
  async (_: any, thunkAPI) => {
    try {
      
      var data = {
        avatar: _.avatar,
        bannerUrl: _.bannerUrl,
        brief: _.brief,
        coinbase: _.coinbase,
        id: _.id,
        loginType: _.loginType,
        nickname: _.nickname,
        shortUrl: _.shortUrl,
      };
      return api("user.setprofile", data).then((res) => {
        console.log(res);
        if (checkResponse(res)) {
          let _data = Object.assign(res.data, {
            walletType: store.getState().web3.walletType,
          });
          
          setLocalStorage({
            Authorization: _data.token,
          });
          setLocalStorage({
            connected: true,
          }); 
          //
          //commit("LOGIN", _data);
          //dispatch("authinfo");
          console.log(_data);
          store.dispatch(getUserInfo({ address: _.coinbase }));
          return _data;
        }
        //resolve(res);
      });

    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  },
)

export const updateProfile = createAsyncThunk(
  UPDATE_PROFILE,
  async (_: any, thunkAPI) => {
    try {
      console.log(_)
      let data = {
        address: _.coinbase,
        id: '3',
        nickname: _.nickname,
        //selectUser ile id yi al
      };
      return api("user.setprofile", data).then((res) => {
        if (checkResponse(res)) {
          console.log(res);
          // commit("USERINFO", _data);
          // dispatch("heartbeat");
          return res.data;
        }
      });
      
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  },
)

export const userLogin = createAsyncThunk(
  USER_LOGIN,
  async (_: any, thunkAPI) => {
    try {
      var data = {
        userAddress: _.coinbase,
        signature: _.signature,
        timestamp: _.timestamp,
      };
      return api("user.login", data).then((res) => {
        console.log(res);
        if (checkResponse(res)) {
          let _data = Object.assign(res.data, {
            walletType: store.getState().web3.walletType,
          });
          
          setLocalStorage({
            Authorization: _data.token,
          });
          setLocalStorage({
            connected: true,
          }); 
          //
          //commit("LOGIN", _data);
          //dispatch("authinfo");
          console.log(_data);
          store.dispatch(getUserInfo({ address: _.coinbase }));
          return _data;
        }
        //resolve(res);
      });

    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  },
)



export const getUserInfo = createAsyncThunk(
  GET_USER_INFO,
  async (_: any, thunkAPI) => {
    try {
      
      let data = {
        address: _.address,
      };
      return api("user.info", data).then((res) => {
        if (checkResponse(res)) {
          console.log(res);
          // commit("USERINFO", _data);
          // dispatch("heartbeat");
          return res.data;
        }
      });
      
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  },
)

const slice = createSlice({
  name: 'groll',
  initialState: {
    defaultConnector: 'metamask',
    provider: null,
    webLoading: false,
    currentRoute: null,
    currentView: null,
    token: null,
    connected: false,
    language: "English",
    isLogin: false,
    heartbeatTimer: null,
    notice_unread: 0,
    fullscreen: {
      show: false,
      component: "",
    },
    message: {
      total: 0,
      unread: 0,
    },
    config: {
      loginMessage: "", 

      contract: {
        multiCallAddress:"",
        auctionExchangeAddress:"",
        blindBoxAddress:"",
        erc20TransferProxyAddress:"",
        nftExchangeAddress:"",
        transferProxyAddress:"",
        error:"",
      }
    },
    gasTracker: null,
    web3: {
      address: null,
      coinbase: null,
      error: null,
      instance: null,
      isInjected: false,
      walletType: "",
      networkId: null,
    },
    ethBalance: "0",
    erc20Balance: {},
    nftBalance: {},
    user: {
      coinbase: "",
      avatar: "",
      brief: "",
      nickname: "",
      shortUrl: "",
      loginType: "",
      bannerUrl: "",
      id: "",
    },
    payTokens: [],
    blindPayTokens: [],
    defalutPayToken: null,
    categorys: [],
    blindBoxSigned: false,
  },
  reducers: {
    DEFAULT_CONNECTOR(state, action) {
      state.defaultConnector = action.payload;
    },
    WEB3: (state, action) => { 
      state.web3.networkId = action.payload.networkId;
      state.web3.walletType = action.payload.walletType;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getConfig.fulfilled, (state, { payload }) => {
      state.config = payload;
      state.connected = true
    })
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      //state.data = payload
      console.log(payload)
      state.token = payload.token;
      state.isLogin= true;
      if (payload.user && payload.user.address) {
        payload.user.address = payload.user.address.toLocaleLowerCase();
      }
      state.user = Object.assign({}, state.user, {
        coinbase: payload.user.address || "",
        avatar: payload.user.avatar || "",
        brief: payload.user.brief || "",
        nickname: payload.user.nickname || "",
        shortUrl: payload.user.shortUrl || "",
        bannerUrl: payload.user.bannerUrl || "",
        id: payload.user.id || "",
      });
      state.web3 = Object.assign({}, state.web3, {
        networkId: payload.networkId,
        walletType: payload.walletType,
      });
      state.isLogin = true;
      state.connected = true;
      Router.push("/signup")
    })
    builder.addCase(getUserInfo.fulfilled, (state, { payload }) => {
      if (payload.address) payload.address = payload.address.toLocaleLowerCase();

      state.user = Object.assign({}, state.user, {
        coinbase: payload.address || "",
        avatar: payload.avatar || "",
        brief: payload.brief || "",
        nickname: payload.nickname || "",
        shortUrl: payload.shortUrl || "",
        bannerUrl: payload.bannerUrl || "",
        id: payload.id || "",
      });
    })
  },
})

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectConfig = (state: AppState) => state.config
export const selectConnector = (state: AppState) => state.defaultConnector

export default slice.reducer

export const { WEB3, DEFAULT_CONNECTOR } = slice.actions
