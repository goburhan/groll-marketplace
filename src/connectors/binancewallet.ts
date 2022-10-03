import { BscConnector } from '@binance-chain/bsc-connector';
import { initializeConnector } from '@web3-react/core';

export const [binanceWallet, hooks] = initializeConnector<any>(
    (actions) => new BscConnector({
        supportedChainIds: [56, 97],
    })
);
