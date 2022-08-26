import React, { useEffect, useRef, useState } from "react";
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
  const [gokhan, setGokhan] = useState("");
  const reader = new FileReader();

  const handleChange = (e) => {
    let file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData + "form dataa");
    let gokhan = formData.getAll("file");
    console.log(gokhan);
    //  reader.readAsDataURL(e.target.files[0]);

    // reader.onload = (e) => {
    //   file = reader.result;
    // };

    // console.log(reader.readAsDataURL(file))

    // file.onload = () => {
    //   this.imgSrc = file.result;
    // };

    // const myImg = fullImageUrl(file);
    // console.log(myImg);

    // if(!file) {
    //   setDataUri('');
    //   return;
    // }

    // fileToDataUri(file)
    //   .then(dataUri => {
    //     setDataUri(dataUri)
    //   })
    //   fullImageUrl(dataUri)

    dispatch(
      updateProfile({
        avatar: formData,
        coinbase: accounts[0],
        id: id,
        nickname: nick,
      })
    );
  };

  return (
    <div>
      <button onClick={() => fileRef.current.click()}>
        upload image button
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
