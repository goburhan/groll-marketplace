import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { Divider } from '../../components/StyledComponents/Divider';
import { getConfig } from '../../actions/wallet/walletSlice';
import Term from './components/Terms';
import { BackButton } from '../../components/StyledComponents/Button';
import { getDefaultConnector } from '../../app/hooks';
import { WindowSize } from '../../hooks/useWindowsize';
import CoinbaseButton from './components/CoinbaseButton';
import MetamaskButton from './components/MetamaskButton';
import WalletConnectButton from './components/WalletConnectButton';
import Header from './components/StyledComponents';

const Flex = styled.div`
    display: flex;
    height: 400px;
    justify-content: space-evenly;
    place-items: center;
    flex-direction: column;
    flex-wrap: wrap;
`;

const ConnectWalletContainer = styled.div`
    padding: 0px 160px 10% 160px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        padding: 0px 62px 32px 32px;
        place-content: center;
    }
`;
const Box = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 100%;
    img {
        max-width: 500px;
        max-height: 500px;
    }
`;

const Side = styled(motion.div)`
    @media (max-width: ${({ theme }) => theme.mobile}) {
        img {
            width: 300px;
        }
        margin-left: -28px;
    }
`;

export default function ConnectWallet() {
    const [selected, setSelected] = useState('');
    const isMobilee = WindowSize();
    const isActive = getDefaultConnector().useIsActive();
    console.log(isActive);
    const accounts = getDefaultConnector().useAccounts();
    console.log(accounts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getConfig());
    }, []);

    const ButtonParentVariants = {
        closed: {
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
        open: {
            width: '100%',
            opacity: 1,
            transition: {
                duration: 0.00001,
            },
        },
    };

    // little trick to arrange terms mobile version
    let mobileWith = '32vw';
    let xvalue = '3vw';

    if (isMobilee) {
        xvalue = '11vw';
        mobileWith = '100%';
    }

    const ChildVariants = {
        closed: {
            opacity: 0,
            width: mobileWith,
            x: '-700px',
            transition: {
                duration: 1,
            },
        },

        open: {
            opacity: 1,
            width: mobileWith,
            x: xvalue,
            y: '0',
            transition: {
                duration: 0.4,
            },
        },

        exit: {
            opacity: 0,
            transition: {
                duration: 0.4,
            },
        },
    };
    return (
        <ConnectWalletContainer>
            <BackButton
                margin="32px 0px 64px 0px"
                mMargin="40px 0px 28px 0px"
            />
            <Header color={({ theme }) => theme.titles} letterSpacing="-0.03em">
                Connect your wallet
            </Header>
            <Divider mt="50px" width="50%" Mwidth="100%" />
            <Box>
                <Flex>
                    <CoinbaseButton
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <MetamaskButton
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <WalletConnectButton
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Flex>
                <AnimatePresence>
                    <div>
                        {selected === '' && (
                            <Side
                                key="parent"
                                initial="closed"
                                variants={ButtonParentVariants}
                                // eslint-disable-next-line no-restricted-globals
                                animate={open ? 'open' : 'closed'}
                            >
                                <motion.img src="/images/coinwallet.png" />
                            </Side>
                        )}

                        {selected !== '' && (
                            <Side
                                key="child"
                                initial="closed"
                                variants={ChildVariants}
                                // eslint-disable-next-line no-restricted-globals
                                animate={open ? 'open' : 'closed'}
                            >
                                <Term />
                            </Side>
                        )}
                    </div>
                </AnimatePresence>
                {/* <img src="/images/coinwallet.png" alt="coinwallet" /> */}
            </Box>
        </ConnectWalletContainer>
    );
}
