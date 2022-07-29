import Web3 from "web3";
// import store from "@/store";
import i18n from "next-i18next";
import store from '../../app/store';
import { toast } from 'react-toastify';
import en from '../../utils/i18n/langs/en';

interface Window {
  ethereum: any;
}

var web3 = new Web3(Web3.givenProvider);

export const setWeb3 = (web3Provider: any) => {
  console.log('set web3 provider');
  web3 = new Web3(web3Provider);
}

export const promisify = (inner) =>
  new Promise((resolve, reject) =>
    inner((err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    })
  );

export default {
  async connectWeb3() {
    var error = "";
    console.log((window as any).ethereum);
    if ((window as any).ethereum) {
      try {
        if((window as any).ethereum._state && !(window as any).ethereum._state.initialized){
          location.reload();
          console.log("ethereum is uninitialized");
          return { error: "ethereum is uninitialized"};
        }
        var t = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(t);
        if (!t) {
          error = "MetaMask enable Error";
          return { error };
        }
        
        // @ts-ignore-next-line
        (window as any).wallet = web3;
        console.log((window as any).wallet);
        var networkId = await promisify((cb) => web3.eth.getChainId(cb));
        var coinbase = await promisify((cb) => web3.eth.getCoinbase(cb));

        console.log(networkId);
        console.log(coinbase);

        (window as any).ethereum.on("accountsChanged", this.accountsChanged);
        (window as any).ethereum.on("chainChanged", this.chainChanged);
        (window as any).ethereum.on("disconnect", this.disconnect);
        let walletType = "metamask";
        return { networkId, coinbase, walletType };
      } catch (e) {
        error = e.message;
      }
    } else {
      error = "MetaMask not Install";
    }
    return { error };
  },
  async connectWallet() {
    console.log("connectWallet")
    return await this.connectWeb3();
  },
  accountsChanged(accounts) {
    if (!store.getState().connected) return;
    console.log("accountsChanged");
    alert("accountsChanged");
    // store.dispatch("logout");
    if (accounts.length) {
      // store.dispatch("connect");
    }
  },
  chainChanged(chainId) {
    console.log(chainId)
    // add it to env variables
    if (chainId !== '0x61') {
      toast(`${en.global.errNetwork} ${en.global.changeNetworkTo} 'BNB Smart Chain'`);
    }
  },

  disconnect(error) {
    if (!store.getState().connected) return;
    // store.dispatch("logout");

    if (store.getState().web3.walletType == "walletconnect") {
      if ((window as any).provider) {
        (window as any).provider.disconnect();
      }
    }
  },
  async getTransaction(tx) {
    let web3 = this.getWeb3();
    try {
      return await promisify((cb) => web3.eth.getTransaction(tx, cb));
    } catch (e) {
      return { error: e.message };
    }
  },
  async getTransactionReceipt(tx) {
    let web3 = this.getWeb3();
    try {
      return await promisify((cb) => web3.eth.getTransactionReceipt(tx, cb));
    } catch (e) {
      return { error: e.message };
    }
  },
  async decodeLog(inputs, hexString, options) {
    let web3 = this.getWeb3();
    try {
      return await promisify((cb) =>
        web3.eth.abi.decodeLog(inputs, hexString, options, cb)
      );
    } catch (e) {
      return { error: e.message };
    }
  },
  getWeb3() {
    return (window as any).wallet;
  },
  async loginWallet(address) {
    let timestamp = parseInt(`${new Date().getTime() / 1000}`);
    var message = store.getState().config.loginMessage + " " + timestamp;
    try {
      let signature = await this.sign(message, address);
      if (signature.error) return signature;

      return {
        signature: signature,
        timestamp: timestamp,
      };
    } catch (e) {
      return { error: e.message };
    }
  },
  async sign(message, address) {
    let web3 = new Web3((window as any).ethereum);
    try {
      // check utils
      address = web3.utils.toChecksumAddress(address);
      var signature = await promisify((cb) =>
        web3.eth.personal.sign(message, address, cb)
      );
      return signature;
    } catch (e) {
      console.log(e);
      return { error: e.message };
    }
  },
  checkWeb3() {
    return (window as any).ethereum && (window as any).ethereum.isConnected();
  },
  async monitorWeb3() {
    let web3 = (window as any).wallet;
    if (typeof web3 == "undefined" || !web3) return;
    var result = await this.checkWeb3(web3);
    if (!result) {
      return;
    }
    let network = store.getState().web3.networkId;

    var networkId = await promisify((cb) => web3.eth.getChainId(cb));
    if (networkId != network.chainId) {
      // tools.messageBox(i18n.i.t("global.errNetwork"), i18n.i.t("global.changeNetworkTo") + network.name );
    }
  },
  async changeNetwork(network) {
    try {
      let result = await (window as any).ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x" + network.chainId.toString(16) }],
      });
      return result;
    } catch (e) {
      if (e.code == 4001) return { error: e.message };
      try {
        let result = await (window as any).ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x" + network.chainId.toString(16),
              chainName: network.name,
              nativeCurrency: {
                name: network.symbol,
                symbol: network.symbol,
                decimals: 18,
              },
              rpcUrls: [network.rpc],
            },
          ],
        });
        return result;
      } catch (e) {
        return { error: e.message };
      }
    }
  },
  async addToken(token) {
    let wasAdded = await (window as any).ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: token.address,
          symbol: token.symbol,
          decimals: token.decimals,
        },
      },
    });
  },
};
