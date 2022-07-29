import ethABI from 'ethereumjs-abi';
import BN from 'bn.js';
import utils_web3 from "../web3";
//import store from "@/store";
import BigNumber from "bignumber.js";
import constants from './constants'
import Web3PromiEvent from 'web3-core-promievent';
import _ from 'lodash'
import store from '../../app/store';

const SolidityTypes = {
  Address: "address",
  Uint256: "uint256",
  Uint8: "uint8",
  Uint: "uint",
  Bytes: "bytes",
  String: "string"
}

function bigNumberToBN(value){
  return new BN(value.toString(), 10);
}

const assetTypes = [0,1,2,3,4, 5]
function isAssetTypes(assetType){
  for(var i = 0; i < assetTypes.length; i++){
    if(assetTypes[i] == assetType) return true;
  }
  return false;
}

function getOrderKey(asset){
  if(!isAssetTypes(asset.sellType)) return false;
  if(!isAssetTypes(asset.buyType)) return false;
  let orderKey = {
    owner: asset.owner,
    salt: asset.salt,
    sellAsset: {
      token: asset.sellToken,
      tokenId: asset.sellTokenId,
      assetType: asset.sellType,
    },
    buyAsset: {
      token: asset.buyToken,
      tokenId: asset.buyTokenId,
      assetType: asset.buyType,
    }
  }
  return orderKey;
}

function createOrder(asset){
  let orderKey = getOrderKey(asset);
  if(!orderKey) return;
  let order = {
    key: orderKey,
    selling: asset.sellValue,
    buying: asset.buyValue,
    sellerFee: asset.sellerFee,
  }
  return order;
}

function tupleOrderKey(orderKey){
  return [
    orderKey.owner,
    orderKey.salt,
    [
      orderKey.sellAsset.token,
      orderKey.sellAsset.tokenId,
      orderKey.sellAsset.assetType,
    ],[
      orderKey.buyAsset.token,
      orderKey.buyAsset.tokenId,
      orderKey.buyAsset.assetType,
    ]
  ]
}

function tupleOrder(order){
  return [
    tupleOrderKey(order.key),
    order.selling,
    order.buying,
    order.sellerFee
  ]
}

function createAuctionOrder(asset) {
  let orderKey = getOrderKey(asset);
  if (!orderKey) return;
  let order = {
    key: orderKey,
    selling: asset.sellValue,
    buying: asset.buyValue,
    endTime: asset.endTime,
    expiredTime: asset.expiredTime,
    encourage: asset.encourage,
    sellerFee: asset.sellerFee,
  };
  return order;
}

function tupleAuctionOrder(order) {
  return [
    tupleOrderKey(order.key),
    order.selling,
    order.buying,
    order.endTime,
    order.expiredTime,
    order.encourage,
    order.sellerFee,
  ];
}

const blindAssetTypes = [0, 1, 2, 3, 4, 5];
function isBlindAssetTypes(assetType) {
  for (var i = 0; i < blindAssetTypes.length; i++) {
    if (blindAssetTypes[i] == assetType) return true;
  }
  return false;
}

function getBlindOrderKey(asset) {
  let orderKey = {
    owner: asset.owner,
    salt: asset.salt,
    sellAssets: asset.sellAssets,
    buyAsset: {
      token: asset.buyerToken,
      tokenId: asset.buyerTokenId,
      assetType: asset.buyerType,
    },
  };
  return orderKey;
}

function createBlindOrder(asset) {
  let orderKey = getBlindOrderKey(asset);
  if (!orderKey) return;
  let order = {
    key: orderKey,
    opening: asset.opening,
    repeat: asset.repeat,
    startTime: asset.startTime,
    endTime: asset.endTime,
    buying: asset.buying,
    assetAmounts: asset.sellings,
    sellerFee: asset.sellerFee,
    uris: asset.uris,
  };
  return order;
}

function tupleBlindOrderKey(orderKey) {
  let sellAssets = [];
  for (var i = 0; i < orderKey.sellAssets.length; i++) {
    let sellAsset = orderKey.sellAssets[i];
    sellAssets.push([sellAsset.token, sellAsset.tokenId, sellAsset.assetType]);
  }
  return [
    orderKey.owner,
    orderKey.salt,
    sellAssets,
    [
      orderKey.buyAsset.token,
      orderKey.buyAsset.tokenId,
      orderKey.buyAsset.assetType,
    ],
  ];
}

function tupleBlindOrder(order) {
  return [
    tupleBlindOrderKey(order.key),
    order.opening,
    order.repeat,
    order.startTime,
    order.endTime,
    order.buying,
    order.assetAmounts,
    order.sellerFee,
    order.uris,
  ];
}


function generateOrderHash(order){
  let sellA = [
    {value: order.orderkey.sellAsset.token, type: SolidityTypes.Address},
    {value: order.orderkey.sellAsset.tokenId, type: SolidityTypes.Uint},
    {value: order.orderkey.sellAsset.assetType, type: SolidityTypes.Uint8},
  ];
  let sellB = [
    {value: order.orderkey.buyAsset.token, type: SolidityTypes.Address},
    {value: order.orderkey.buyAsset.tokenId, type: SolidityTypes.Uint},
    {value: order.orderkey.buyAsset.assetType, type: SolidityTypes.Uint8},
  ];
  const typesA = _.map(sellA, o => o.type);
  const valuesA = _.map(sellA, o => o.value);
  const hashBufA = ethABI.soliditySHA3(typesA, valuesA);
  const typesB = _.map(sellB, o => o.type);
  const valuesB = _.map(sellB, o => o.value);
  const hashBufB = ethABI.soliditySHA3(typesB, valuesB);
  let orderKey = [
    {value: order.orderkey.owner, type: SolidityTypes.Address},
    {value: bigNumberToBN(order.orderkey.salt), type: SolidityTypes.Uint},
    {value: new Buffer(hashBufA, 'hex'), type: SolidityTypes.Bytes},
    {value: new Buffer(hashBufB, 'hex'), type: SolidityTypes.Bytes},
  ]
  const typesKey = _.map(orderKey, o => o.type);
  const valuesKey = _.map(orderKey, o => o.value);
  const hashBufKey = ethABI.soliditySHA3(typesKey, valuesKey);
  let _order = [
    {value: new Buffer(hashBufKey, 'hex'), type: SolidityTypes.Bytes},
    {value: order.selling, type: SolidityTypes.Uint},
    {value: order.buying, type: SolidityTypes.Uint},
    {value: order.sellerFee, type: SolidityTypes.Uint},
  ];
  const typesOrder = _.map(_order, o => o.type);
  const valuesOrder = _.map(_order, o => o.value);
  const hashBufOrder = ethABI.soliditySHA3(typesOrder, valuesOrder);
  var eth_util = require("ethereumjs-util");
  return eth_util.bufferToHex(hashBufOrder);
}

function contractAbi(type){
  let file = null;
  switch(type){
    case "ERC721":
      file = require('./abi/NFT721.json')
      break;
    case "ERC1155":
      file = require("./abi/NFT1155.json");
      break;
    case "ERC20":
      file = require("./abi/IERC20.json")
      break;
    case "EXCHANGE":
      file = require("./abi/NftExchange.json");
      break;
    case "CreateNFT721":
      file = require("./abi/CustomNFT721.json");
      break;
    case "CreateNFT1155":
      file = require("./abi/CustomNFT1155.json");
      break;
    case "AUCTION":
      file = require("./abi/AuctionExchange.json");
      break;
    case "BLINDBOX":
      file = require("./abi/BlindBox.json");
      break;
    case "AUCTIONS_EXCHANGE":
      file = require("./abi/AuctionExchange.json");
      break;
    case "MULTICALL":
      file = require("./abi/Multicall.json");
      break;
    // case "POOL":
    //   file = require("./abi/Pool.json");
    //   break;
    // case "FARM_TOKEN":
    //   file = require("./abi/FarmToken.json");
    //   break;
    // case "FARM":
    //   file = require("./abi/Farm.json");
    //   break;
    // case "FARM_VAULT":
    //   file = require("./abi/FarmVault.json");
    //   break;
    // case "NFT_POOL":
    //   file = require("./abi/NftPool.json");
    //   break;
    case "CustomNFT721":
      file = require("./abi/CustomNFT721.json");
      break;
    case "CustomNFT1155":
      file = require("./abi/CustomNFT1155.json");
      break;
    case "NFT":
      file = require("./abi/NFT.json");
      break;
    // case "TOKEN_VAULT":
    //   file = require("./abi/TokenVault.json");
    //   break;
  }
  return file || {};
}


const GAS_MULTIPLIER = 1.25;

function getGasEstimate(gas, block){
  const blockLimit = new BigNumber(block.gasLimit);
  if(gas != null){
    gas = blockLimit.dividedBy(new BigNumber(7)).toFixed(0);
  }else{
    if(gas.error) return gas;
    if(gas.code && gas.code == -32000){
      return { error: gas.message}
    }
    gas = new BigNumber(gas).multipliedBy(new BigNumber(GAS_MULTIPLIER));
    if(gas.isGreaterThanOrEqualTo(blockLimit)){
      gas = blockLimit.minus(new BigNumber(1)).toFixed(0);
    }else{
      gas = gas.toFixed(0);
    }
  }
  return gas;
}




const calcGas = async (web3:any, lastArg:any, ts:any) => {
  var block = await web3.eth.getBlock("latest");
  var lastBlock = block.number;
  var gasTracker = store.getState().gasTracker;
  let gasPrice = 0;
  if (
    gasTracker &&
    parseFloat(gasTracker.lastBlock) > parseFloat((lastBlock - 50).toString())
  ) {
    gasPrice = gasTracker.medium;
  } else {
    gasPrice = await web3.eth.getGasPrice();
  }
 
  let gas:any = await new Promise((resolve, reject) => {

    
    ts.estimateGas(
      {
      //  ...args,
        gasPrice,
      },
      (e, r) => {
        if (e) {
          reject(e);
        } else {
          resolve(r);
        }
      }
    )
  }).catch(e => {
    return { error: e.message }
  });
  gas = getGasEstimate(gas, block);
  if(gas.error) return gas;

  return {
    gasPrice,
    gas,
  };
};



// this pointler silindi
class MyContract {
  constructor(contract:any, abi:any) {
    contract = contract;
    abi = abi;
    for (const key in contract.methods) {
      // this[key] = async (...args) => {
      this[key] = (...args) => {
        let promiEvent = new Web3PromiEvent();

        const a = abi.abi.find((a) => { // ? abi.abi kontrol et 
          return a.name === key;
        });

        try {
          const web3 = utils_web3.getWeb3();
          if (a.inputs.length === args.length) {
          contract.methods[key](...args).call(
              (e, r) => {
                if(e){
                  promiEvent.reject(e);
                }else{
                  promiEvent.resolve(r);
                }
              }
            );
          } else {
            const lastArgs = args.pop();
            const ts = contract.methods[key](...args);
            calcGas(web3, lastArgs, ts).then(async function(res){
              if(!res) return promiEvent.resolve(res);

              const { gas, gasPrice } = res;

              let result = await ts.send(
                { ...lastArgs, gasPrice, gas }
              ).on("transactionHash", function(hash){
                promiEvent.eventEmitter.emit("transactionHash", hash);
              }).on("error", function(e){
                promiEvent.reject(e);
              });
              promiEvent.resolve(result);
            });
          }
          return promiEvent.eventEmitter;
        } catch (e) {
          promiEvent.reject(e);
        }
      };
    }
  }
  // async new(args, account){
  //   try{
  //     const web3 = utils_web3.getWeb3();
  //     // const ts = contract.deploy({ data: abi.bytecode, arguments: args });
  //     const lastArgs = args.pop();
  //     // const gasResult = await calcGas(web3, lastArgs, ts);
  //     if(gasResult.error) return gasResult;

  //     const { gas, gasPrice } = gasResult;
  //     const result = await ts.send({from: account, gasPrice, gas});
  //     return result.options;
  //   }catch(e){
  //     return { error: e.message }
  //   }
  // }
}


function checkContractCode(code, address){
  if (!code || code.replace("0x", "").replace(/0/g, "") === "")
      throw new Error(
        `This network does not have this contract at address ${address}`
      );
}



async function contractAt(abi: any, address?: any){
    if (!store.getState().connected) {
      return {
        error: "wallet not connected",
      };
    }
    try {
      const web3 = utils_web3.getWeb3();
      let contract = null;
      if(address){
        var code = await web3.eth.getCode(address);
        checkContractCode(code, address);
        contract = new web3.eth.Contract(abi.abi, address);
      }else{
        contract = new web3.eth.Contract(abi.abi);
      }
      const myContract = new MyContract(contract, abi);
      return myContract;
    } catch (err) {
      return { error: err };
    }
}

export default {
  contractAbi,
  generateOrderHash,
  createOrder,
  getOrderKey,
  createAuctionOrder,
  tupleOrderKey,
  tupleOrder,
  tupleAuctionOrder,

  getBlindOrderKey,
  createBlindOrder,
  tupleBlindOrderKey,
  tupleBlindOrder,

  contractAt,
}

