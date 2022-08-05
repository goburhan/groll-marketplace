import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectConnector,
  updateProfile,
  userSelect,
} from "../../../actions/wallet/walletSlice";
import { fullImageUrl, getDefaultConnector } from "../../../app/hooks";



export default function App() {
  const fileRef: any = useRef();
  const dispatch = useDispatch();
  const defaultConnector = useSelector(selectConnector);
  const user = useSelector(userSelect);
  const accounts = getDefaultConnector().useAccounts();
  const id = user.id;
  const nick = user.nickname;

  const handleChange = (e) => {
    const [file] = e.target.files;

    const myImg = fullImageUrl(file.name);
    console.log(myImg);

    // dispatch(
    //   updateProfile({
    //     avatar: myImg,
    //     coinbase: accounts[0],
    //     id: id,
    //     nickname: nick,
    //   })
    // );
  };

  return (
    <div>
      <button onClick={() => fileRef.current.click()}>
        Custom F
      </button>
      <input
        ref={fileRef}
        onChange={handleChange}
        multiple={false}
        type="file"
        hidden
      />
    </div>
  );
}
