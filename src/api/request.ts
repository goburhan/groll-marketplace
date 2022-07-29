import axios from 'axios'
import Router from 'next/router'
import store from '../app/store';

import { toast } from 'react-toastify';
import { userLogin } from '../actions/wallet/walletSlice';
import en from '../utils/i18n/langs/en';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API || 'https://craftlabs.tech',
  timeout: 50000, // request timeout
})


// request interceptor
service.interceptors.request.use(
  config => {
    if (!config.headers['Finger-Nft-Token']) {
      config.headers['Finger-Nft-Token'] = `${window.localStorage.getItem(
        'Authorization'
      ) || ''}`;
    }
 
    return config;
  },
  err => Promise.reject(err)
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    console.log(res)
    console.log(store.getState().isLogin)

    if (res.errno === 501) {
      if(!store.getState().isLogin) {
        toast(`${en.global.needLogin}`);
        setTimeout(() => {
          Router.push("/connect");
        }, 3000)    
      } else {
        store.dispatch(userLogin(store.getState().web3.coinbase));
      }
      return res;
    } else if (res.errno === 502) {
      toast(`${en.global.err502}`);
      return res;
    } if (res.errno === 401) {
      toast(`${en.global.errParams}`);
      return res;
    } if (res.errno === 402) {
      toast(`${en.global.errParams}`);
      return res;
    } else if (res.errno !== 0) {
      return res;
    } else {
      return res;
    }
  }, error => {
    return {
      errno: 400,
      errmsg: error.message,
    }
  }
)

export default service
