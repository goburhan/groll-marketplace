import { Web3ReactHooks } from '@web3-react/core/dist/hooks'
import type { ChangeEvent } from 'react'
import { useEffect, useRef } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { selectConnector } from '../actions/wallet/walletSlice';
import {
  hooks as coinbaseWalletHooks,
  coinbaseWallet,
} from "../connectors/coinbasewallet";
import { hooks as metaMaskHooks, metaMask } from "../connectors/metamask";
import {
  hooks as walletConnectHooks,
  walletConnect,
} from "../connectors/walletconnect";
import type { AppDispatch, AppState } from './store'
import store from './store'

export const useForm =
  <TContent>(defaultValues: TContent) =>
  (handler: (content: TContent) => void) =>
  async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.persist()

    const form = event.target as HTMLFormElement
    const elements = Array.from(form.elements) as HTMLInputElement[]
    const data = elements
      .filter((element) => element.hasAttribute('name'))
      .reduce(
        (object, element) => ({
          ...object,
          [`${element.getAttribute('name')}`]: element.value,
        }),
        defaultValues
      )
    await handler(data)
    form.reset()
  }

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export const useInterval = (callback: Function, delay: number) => {
  const savedCallback = useRef<Function>()
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  useEffect(() => {
    const handler = (...args: any) => savedCallback.current?.(...args)

    if (delay !== null) {
      const id = setInterval(handler, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export function fullImageUrl(url) {
  if (!url) return "";
  if (url.toLowerCase().startsWith("ipfs:/")) {
    let urlArr = url.split("/");
    if (url.indexOf("image") > -1 || url.indexOf("animation") > -1) {
      url =
        "ipfs/" + urlArr[urlArr.length - 2] + "/" + urlArr[urlArr.length - 1];
    } else {
      url = "ipfs/" + urlArr[urlArr.length - 1];
    }
    return store.getState().config.ipfsUrl + "/" + url;
  }
  // not ipfs url

  var cdnUrl = store.getState().config.cdnUrl;
  return cdnUrl ? cdnUrl + url : url;
}

export function getDefaultConnector(): Web3ReactHooks {
  const defaultConnector = useSelector(selectConnector);
  switch (defaultConnector) {
    case "metamask":
      return metaMaskHooks;
      break;
    case "coinbase":
      return coinbaseWalletHooks;
      break;
    case "walletconnect":
      return walletConnectHooks;
      break;

    default:
      return metaMaskHooks;
  }
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
