import React from 'react';
import { Text24 } from '../../../components/StyledComponents/Text';
import { WindowSize } from '../../../hooks/useWindowsize';
import { WalletWrapper } from './StyledComponents';

export default function WalletConnectButton({ selected, setSelected }) {
    const isMobilee = WindowSize();
    return (
        <WalletWrapper
            key="parent"
            initial={
                selected === 'walletconnect'
                    ? {
                        border: 'none ',
                        opacity: 0,
                    }
                    : {}
            }
            animate={
                selected === 'walletconnect'
                    ? {
                        border: '1px solid #484D57 ',
                        opacity: 1,
                    }
                    : { border: 'none ' }
            }
            transition={selected === 'walletconnect' ? { duration: 0.2 } : {}}
            style={
                // eslint-disable-next-line no-nested-ternary
                selected === 'walletconnect'
                    ? !isMobilee
                        ? {
                            // selected metamask && desktop styling
                            border: '1px solid #484d57',
                            width: '45vw',
                            padding: '20px',
                            justifyContent: 'space-between',
                            borderRadius: '16px',
                        }
                        : {
                            // selected metamask && mobile styling
                            border: '1px solid #484d57',
                            width: '100%',
                            padding: '20px 4px',
                            borderRadius: '16px',
                        }
                    : {}
            }
            onClick={
                () => setSelected('walletconnect')
                // walletConnect
                //   .activate(97)
                //   .then((res) => {
                //     console.log(res);
                //     store.dispatch(DEFAULT_CONNECTOR("walletconnect"));
                //   })
                //   .catch((err) => {
                //     console.log(err);
                //   }) && setSelected("walletconnect")
            }
        >
            <div>
                {selected === 'walletconnect' ? (
                    <img src="/images/Walletconnected.svg" alt='connected' />
                ) : (
                    <img src="/images/Walletconnect.svg" alt='walletconnect' />
                )}
                <Text24>Wallet Connect</Text24>
            </div>
            {selected === 'walletconnect' && !isMobilee ? (
                <img src="/images/Staticlogos/Arrow.svg" alt='collapse' />
            ) : null}
        </WalletWrapper>
    );
}
