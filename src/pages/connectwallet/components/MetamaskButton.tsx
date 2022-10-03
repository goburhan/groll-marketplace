import React from 'react';
import { DEFAULT_CONNECTOR } from '../../../actions/wallet/walletSlice';
import store from '../../../app/store';
import { Text24 } from '../../../components/StyledComponents/Text';
import { metaMask } from '../../../connectors/metamask';
import { WindowSize } from '../../../hooks/useWindowsize';
import { WalletWrapper } from './StyledComponents';

export default function MetamaskButton({ selected, setSelected }) {
    const isMobilee = WindowSize();
    return (
        <WalletWrapper
            key="parent"
            initial={
                selected === 'metamask'
                    ? {
                        border: 'none ',
                        opacity: 0,
                    }
                    : {}
            }
            animate={
                selected === 'metamask'
                    ? {
                        border: '1px solid #484D57 ',
                        opacity: 1,
                    }
                    : { border: 'none ' }
            }
            transition={selected === 'metamask' ? { duration: 0.2 } : {}}
            style={
                // eslint-disable-next-line no-nested-ternary
                selected === 'metamask'
                    ? !isMobilee
                        ? {
                            // selected metamask on desktop styling
                            border: '1px solid #484d57',
                            width: '45vw',
                            padding: '20px',
                            justifyContent: 'space-between',
                            borderRadius: '16px',
                        }
                        : {
                            // selected metamask on mobile styling
                            border: '1px solid #484d57',
                            width: '100%',
                            padding: '20px 4px',
                            borderRadius: '16px',
                        }
                    : {}
            }
            onClick={() => metaMask.activate(97).then((res) => {
                console.log(res);
                store.dispatch(DEFAULT_CONNECTOR('metamask'));
            })
                .catch((err) => {
                    console.log(err);
                }) && setSelected('metamask')
            }
        >
            <div>
                {selected === 'metamask' ? (
                    <img src="/images/Walletconnected.svg" alt='connected' />
                ) : (
                    <img src="/images/Metamask.svg" alt='metamask' />
                )}
                <Text24>Metamask Wallet</Text24>
            </div>

            {selected === 'metamask' && !isMobilee ? (
                <img src="/images/Staticlogos/Arrow.svg" alt='collapse' />
            ) : null}
        </WalletWrapper>
    );
}
