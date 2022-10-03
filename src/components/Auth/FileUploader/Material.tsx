import { Web3ReactHooks } from '@web3-react/core/dist/hooks';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
    selectConnector,
    userSelect,
} from '../../../actions/wallet/walletSlice';
import { hooks as coinbaseWalletHooks } from '../../../connectors/coinbasewallet';
import { hooks as metaMaskHooks, metaMask } from '../../../connectors/metamask';
import { hooks as walletConnectHooks } from '../../../connectors/walletconnect';
import { getDefaultConnector } from '../../../app/hooks';

export default function FileInput() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const dispatch = useDispatch();
    const defaultConnector = useSelector(selectConnector);
    const accounts = getDefaultConnector().useAccounts();
    const user = useSelector(userSelect);
    const userId = user.id;
    const nick = user.nickname;
    useEffect(() => {
        if (selectedImage) {
            // setImageUrl(URL.createObjectURL(selectedImage));
            setImageUrl(selectedImage);
        }
        console.log(imageUrl);

        // dispatch(
        //   updateProfile({
        //     avatar: selectedImage,
        //     coinbase: accounts[0],
        //     id: userId,
        //     nickname: nick,
        //   })
        // );
    });

    console.log(imageUrl);

    return (
        <>
            <input
                accept="image/*"
                type="file"
                id="select-image"
                style={{ display: 'none' }}
                onChange={(e) => setSelectedImage(e.target.files[0])}
            />
            <label htmlFor="select-image">
                <Button variant="contained" color="primary" component="span">
                    Upload Image
                </Button>
            </label>
        </>
    );
}
