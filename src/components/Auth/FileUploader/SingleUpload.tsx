import React, { useEffect, useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import styled from "styled-components";
import {
  selectConnector,
  updateProfile,
} from "../../../actions/wallet/walletSlice";
import { useDispatch, useSelector } from "react-redux";
import { Web3ReactHooks } from "@web3-react/core";
import { hooks as coinbaseWalletHooks } from "../../../connectors/coinbasewallet";
import { hooks as metaMaskHooks, metaMask } from "../../../connectors/metamask";
import { hooks as walletConnectHooks } from "../../../connectors/walletconnect";

export default function SingleUpload({ button }) {
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const dispatch = useDispatch();
  const defaultConnector = useSelector(selectConnector);

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    {imageList.map((image, index) => (
      dispatch(
        updateProfile({
          avatar: image.dataURL,
          coinbase: accounts[0],
        })
      )
    ))}
    // dispatch(
    //   updateProfile({
    //     avatar: imageList[0],
    //     coinbase: accounts[0],
    //   })
    // )
   
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };


  function getDefaultConnector(): Web3ReactHooks {
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
  const accounts = getDefaultConnector().useAccounts();
  // useEffect(() => {
  //   const change = async () => {
  //     dispatch(
  //       updateProfile({
  //         avatar: addUpdateIndex,
  //         coinbase: accounts[0],
  //       })
  //     );
  //   };
  //   console.log(images[0]);
  // }, [images]);

  const UploadButton = styled.button`
    font-family: "Popins", sans-serif;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #484d57;
    border-radius: 25px;
    padding: 12px 16px;
    margin-top: 16px;
    color: ${({ theme }) => theme.linkItems};
  `;
  //   interface flex {
  //     direction?: string;
  //   }
  //   const Flex = styled.div<flex>`
  //     display: flex;
  //     justify-content: space-between;
  //     color: ${( props ) => props.direction}; `
  //     ;

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <UploadButton
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              {button}
            </UploadButton>
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {/* {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <UploadButton onClick={() => onImageUpdate(index)}>
                    Update
                  </UploadButton>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))} */}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
