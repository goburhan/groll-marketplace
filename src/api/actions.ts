import BigNumber from "bignumber.js";
import { checkResponse } from '../utils/tools';
import { toast } from 'react-toastify';
import api from "../api";
import sdk from "../utils/sdk";
import util_web3 from "../utils/web3";
import { getLocalStorage, removeLocalStorage } from "../utils/local-storage";
import store from '../app/store';
import en from '../utils/i18n/langs/en';

function getActiveNetwork(result, networks) {
  let network = null;
  for (var i = 0; i < networks.length; i++) {
    let _network = networks[i];
    if (result.networkId == _network.channelId) {
      network = _network;
      break;
    }
  }
  return network;
}

export default {
  config({ state, commit }) {
    return new Promise((resolve, reject) => {
      api("config.fetch").then((res) => {
        if (checkResponse(res)) {
          resolve(res.data);
        }
      });
    });
  },
  gasTracker({state, commit}){
    return new Promise((resolve, reject) => {
      api("config.gasTracker").then((res) => {
        if (checkResponse(res)) {
            resolve(res.data);
        }
      });
    });
  },
  reload({ state, commit, dispatch }) {
    return new Promise(function(resolve, reject) {
      var items: any = getLocalStorage("Authorization");
      if (items.Authorization) {
        api("user.reload")
          .then(async function(response) {
            if (checkResponse(response)) {
              if (
                state.user.coinbase !=
                response.data.user.address.toLocaleLowerCase()
              ) {
                removeLocalStorage("Authorization");
                resolve(response);
              } else {
                commit("RELOAD");
                commit("USERINFO", response.data.user);
                dispatch("heartbeat");
              }
            } else {
              removeLocalStorage("Authorization");
            }
            resolve(response);
          })
          .catch((err) => {
            removeLocalStorage("Authorization");
            resolve(err);
          });
      }
    });
  },
  updatePayToken({ state, commit, dispatch }, payToken) {
    return new Promise((resolve, reject) => {
      if (payToken.address == sdk.NULL_ADDRESS()) {
        dispatch("ethBalance");
      } else if (!payToken.tokenId || !parseInt(payToken.tokenId)) {
        dispatch("erc20Balance", payToken);
      } else {
        dispatch("nftBalance", payToken);
      }
    });
  },
  payTokens({ state, commit, dispatch }) {
    return new Promise((resolve, reject) => {
      api("paytoken.list").then((res) => {
        if (checkResponse(res)) {
          commit("PAYTOKENS", res.data);
          dispatch("allBalance");
        }
        resolve(res);
      });
    });
  },
  blindPayTokens({ state, commit, dispatch }) {
    return new Promise((resolve, reject) => {
      api("blind.paytoken.list").then((res) => {
        if (checkResponse(res)) {
          commit("BLIND_PAYTOKENS", res.data.list);
          dispatch("allBlindBalance");
        }
        resolve(res);
      });
    });
  },
  categorys({ state, commit }) {
    return new Promise((resolve, reject) => {
      api("category.list").then((res) => {
        if (checkResponse(res)) {
          commit("CATEGORYS", res.data);
        }
        resolve(res);
      });
    });
  },
  logout({ state, commit }) {
    return new Promise((resolve, reject) => {
      commit("LOGOUT");
      resolve('LOGOUT');
    });
  },
  unreadNotice({ state, commit, getters }) {
    return new Promise(function(resolve, reject) {
      api("notice.unread").then((res) => {
        if (checkResponse(res)) {
          commit("NOTICE_UNREAD", res.data);
        }
      });
    });
  },
  allBalance({ state, commit, getters, dispatch }) {
    return new Promise(async function(resolve, reject) {
      for (var i = 0; i < state.payTokens.length; i++) {
        let token = state.payTokens[i];
        if (token.address == sdk.NULL_ADDRESS()) {
          dispatch("ethBalance");
        } else {
          dispatch("erc20Balance", token);
        }
      }
    });
  },
  allBlindBalance({ state, commit, getters, dispatch }) {
    return new Promise(async function(resolve, reject) {
      for (var i = 0; i < state.blindPayTokens.length; i++) {
        let token = state.blindPayTokens[i];
        if (token.address == sdk.NULL_ADDRESS()) {
          dispatch("ethBalance");
          continue;
        }
        if (!parseInt(token.tokenId)) {
          // erc20
          dispatch("erc20Balance", token);
          continue;
        }
        dispatch("nftBalance", token);
      }
    });
  },
  ethBalance({ state, commit, getters }) {
    return new Promise(async function(resolve, reject) {
      let asset = {
        address: sdk.NULL_ADDRESS(),
      };
      let owner = state.user.coinbase;
      let balance = await sdk.getBalance(asset, owner);
      if (balance.error) return resolve(balance.error);

      commit("ETH_BALANCE", balance);
      resolve(balance);
    });
  },
  erc20Balance({ state, commit, getters }, payToken) {
    return new Promise(async function(resolve, reject) {
      let asset = {
        address: payToken.address,
      };
      let owner = state.user.coinbase;
      let balance = await sdk.getBalance(asset, owner);
      if (balance.error) return resolve(balance.error);
      balance = new BigNumber(balance.toString());
      let decimal = new BigNumber(10).exponentiatedBy(payToken.decimals);
      balance = balance.dividedBy(decimal).toFixed();
      let payload = {};
      payload[payToken.address.toLocaleLowerCase()] = balance;
      commit("ERC20_BALANCE", payload);
      resolve(payload);
    });
  },
  nftBalance({ state, commit, getters }, paytoken) {
    return new Promise(async function(resolve, reject) {
      let owner = state.user.coinbase;
      let balance = await sdk.getNFTBalance(paytoken, owner);
      if (balance.error) return resolve(balance.error);
      balance = balance.toString();
      let payload = {};
      let key = paytoken.address + ":" + paytoken.tokenId;
      payload[key] = balance;
      commit("NFT_BALANCE", payload);
      resolve(payload);
    });
  },
  authinfo({ state, commit, dispatch }) {
    return new Promise((resolve, reject) => {
      let data = {
        address: state.user.coinbase,
      };
      api("user.info", data).then((res) => {
        if (checkResponse(res)) {
          let _data = Object.assign({}, res.data, {
            address: state.user.coinbase,
          });
          commit("USERINFO", _data);
          dispatch("heartbeat");
        }
        resolve(res);
      });
    });
  },
  heartbeat({ state, commit, dispatch }) {
    if (state.heartbeatTimer) {
      clearTimeout(state.heartbeatTimer);
      commit("HEARTBEAT", null);
    }
    if (!state.connected) return;
    return new Promise((resolve, reject) => {
      // dispatch("monitorWeb3");
      dispatch("gasTracker");
      dispatch("allBalance");
      dispatch("allBlindBalance");
      var timer = setTimeout(() => {
        dispatch("heartbeat");
      }, 20000);
      commit("HEARTBEAT", timer);
    });
  },
  monitorWeb3({ state, commit, dispatch }) {
    return new Promise(async function(resolve, reject) {
      await util_web3.monitorWeb3();
      resolve(true);
    });
  },
  connect({ state, commit, dispatch }, isInit) {
    return new Promise(async function(resolve, reject) {
      var result = await util_web3.connectWallet();
      if (result.error) {
        if (!isInit) {
          toast(result.error);
        }
        return resolve(result);
      }

      commit("CONNECT", result);
      await dispatch("authinfo");
      resolve(true);
    });
  },
  userLogin(payload) {
    return new Promise(async function(resolve, reject) {
      let user = payload;
      // if (!user || !user.coinbase) user = state.user;

      let signature = await util_web3.loginWallet(user.coinbase);

      if (signature.error) {
        toast(`${en.global.errSignature} | ${signature.error}`);
        return resolve(signature.error);
      }
      var data = {
        userAddress: user.coinbase,
        signature: signature.signature,
        timestamp: signature.timestamp,
      };
      api("user.login", data).then((res) => {
        if (checkResponse(res)) {
          let _data = Object.assign(res.data, {
            walletType: store.getState().web3.walletType,
          });
          resolve(_data);
          // commit("LOGIN", _data);
          // dispatch("authinfo");
        }
      });
    });
  },
  connectAndSign({ state, commit, dispatch }, type) {
    return new Promise(async function(resolve, reject) {
      let result = await util_web3.connectWallet();
      if (result.error) {
        toast(result.error);
        return resolve(result.error);
      }

      commit("WEB3", result);
      let data = {
        coinbase: result.coinbase,
        networkId: result.networkId,
        
      };
      result = await dispatch("userLogin", data);
      resolve(result);
    });
  },
  countNotices({ state, commit }) {
    return new Promise(function(resolve, reject) {
      if (!state.connected) resolve(false);
      let data = {
        address: state.user.coinbase,
      };
      api("notice.count", data).then((res) => {
        if (checkResponse(res)) {
          commit("MESSAGE", res.data);
        }
        resolve(res.data);
      });
    });
  },
  unreadNoticeByAddress({ state, commit }) {
    return new Promise(function(resolve, reject) {
      let data = {
        address: state.user.coinbase,
      };
      api("notice.countunread", data).then((res) => {
        if (checkResponse(res)) {
          commit("NOTICE_UNREAD", res.data);
        }
        resolve(res.data);
      });
    });
  },
  disconnect({ state, commit }) {
    return new Promise((resolve, reject) => {
      commit("DISCONNECT");
      resolve('DISCONNECT');
    });
  },
  setCurrentView({ commit }, newRoute) {
    commit("setCurrentView", newRoute);
  },
  //改变当前路由
  changeCurrentRouteTo({ commit }, newRoute) {
    commit("changeCurrentRouteTo", newRoute);
  },
};
