import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { useWeb3React, Web3ReactHooks } from '@web3-react/core';
import { formatEther } from '@ethersproject/units';
import { toast } from 'react-toastify';
import { ethers } from "ethers";

import type { BigNumber } from '@ethersproject/bignumber';

import { getDefaultConnector, useAppDispatch } from '../../app/hooks';
import { userLogin, connectWallet, getConfig, selectConnector, DEFAULT_CONNECTOR } from '../../actions/wallet/walletSlice';

import { hooks as coinbaseWalletHooks, coinbaseWallet } from '../../connectors/coinbasewallet'
import { hooks as metaMaskHooks, metaMask } from '../../connectors/metamask'
import { hooks as walletConnectHooks, walletConnect } from '../../connectors/walletconnect'

import { Status } from '../../components/Status';
import store from '../../app/store';
import en from '../../utils/i18n/langs/en';

function useBalances(
  provider?: ReturnType<Web3ReactHooks['useProvider']>,
  accounts?: string[]
): BigNumber[] | undefined {
  const [balances, setBalances] = useState<BigNumber[] | undefined>()

  useEffect(() => {
    if (provider && accounts?.length) {
      let stale = false

      void Promise.all(accounts.map((account) => provider.getBalance(account))).then((balances) => {
        if (stale) return
        setBalances(balances)
      })

      return () => {
        stale = true
        setBalances(undefined)
      }
    }
  }, [provider, accounts])

  return balances
}

export const Home = (props) => {
  const dispatch = useAppDispatch()
  const context = useWeb3React();

  const defaultConnector = useSelector(selectConnector);

 

  const chainId = getDefaultConnector().useChainId()
  const accounts = getDefaultConnector().useAccounts()
  const isActivating = getDefaultConnector().useIsActivating()

  const isActive = getDefaultConnector().useIsActive()

  const provider = getDefaultConnector().useProvider()
  const ENSNames = getDefaultConnector().useENSNames(provider)

  const balances = useBalances(provider, accounts)

  useEffect(() => {
    console.log(store.getState());
    console.log(defaultConnector);
    console.log(props);
    console.log(context);
    console.log(balances);

    // çalışmıyor henüz. utildeki web3.js ile denemek lazım. Çalıştı bi ara
    let provider = new ethers.providers.Web3Provider(context.provider ? context.provider.provider : window.ethereum);


    provider.on('accountsChanged', (accounts) => {
      // logout & login
      console.log(accounts);
    });

    provider.on('chainChanged', (networkId) => {
      console.log(chainId)
      // add it to env variables
      if (networkId !== '0x61') {
        toast(`${en.global.errNetwork} ${en.global.changeNetworkTo} 'BNB Smart Chain'`);
      }
    });

  });

  return (
    <div>
      Home
      <Status isActivating={isActivating} isActive={isActive} />
      <p>
        Chain ID: {chainId}
      </p>
      Accounts:{' '}
      <b>
        {accounts?.length === 0
          ? 'None'
          : accounts?.map((account, i) => (
              <ul key={account} style={{ margin: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {ENSNames?.[i] ?? account}
                {balances?.[i] ? ` (Ξ${formatEther(balances[i])})` : null}
              </ul>
            ))}
      </b>

      <button
        style={{ backgroundColor: 'gray', color: 'white' }}
        aria-label="Get config"
        onClick={() => dispatch(getConfig()) }
      >
        Get Config
      </button>
      <button
        style={{ backgroundColor: 'gray', color: 'white', margin: 10 }}
        aria-label="Connect Metamask"
        onClick={() => metaMask.activate(97).then((res) => {
          console.log(res)
          store.dispatch(DEFAULT_CONNECTOR('metamask'));
        }).catch(err => {
          console.log(err)
        })
       }
      >
        Connect Metamask
      </button>
      <button
        style={{ backgroundColor: 'gray', color: 'white', margin: 10 }}
        aria-label="Connect Walletconnect"
        onClick={() => walletConnect.activate(97).then((res) => {
          console.log(res)
          store.dispatch(DEFAULT_CONNECTOR('walletconnect'));
        }).catch(err => {
          console.log(err)
        })
       }
      >
        Connect WalletConnect
      </button>
      <button
        style={{ backgroundColor: 'gray', color: 'white', margin: 10 }}
        aria-label="Connect Coinbase Wallet"
        onClick={() => coinbaseWallet.activate(97).then((res) => {
          console.log(res)
          store.dispatch(DEFAULT_CONNECTOR('coinbase'));
        }).catch(err => {
          console.log(err)
        })
       }
      >
        Connect Coinbase Wallet
      </button>
      <button
        style={{ backgroundColor: 'gray', color: 'white', margin: 10 }}
        aria-label="Connect Wallet"
        onClick={() =>  {
          console.log(isActive);
          dispatch(connectWallet({ chainId }))
        }}
      >
        Connect Wallet
      </button>
      <button
        style={{ backgroundColor: 'gray', color: 'white', margin: 10 }}
        aria-label="Sign Message"
        onClick={() => {

      
          let timestamp = parseInt(`${new Date().getTime() / 1000}`);
          var message = store.getState().config.loginMessage + " " + timestamp;

          context.provider.provider.request({ 
            method: 'personal_sign',
            params: [message, accounts[0]],
          }).then((signature) => {
            console.log(signature);
            dispatch(userLogin({ coinbase: accounts[0], signature, timestamp }))
          }).catch((err) => {
            console.log(err);
          });
        }}
      >
        Sign Message
      </button>
      <button
        style={{ backgroundColor: 'gray', color: 'white', margin: 10 }}
        aria-label="Swith to BSC Testnet"
        onClick={() => {
          context.provider.provider.request({ 
            method: 'wallet_addEthereumChain',
            params: [{
              // Get chainId and rpcUrls from env variables
              chainId: '0x61',
              rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"]
            }],
          }).then((res) => {
            console.log(res);
          }).catch((err) => {
            console.log(err);
          });
        }}
      >
        Swith to BSC Testnet
      </button>

    </div>
  )
}

const mapStateToProps = (state) => ({
  state,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)