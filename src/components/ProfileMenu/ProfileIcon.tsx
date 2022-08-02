import * as React from "react";
import store from "../../app/store";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { EditLower, ProfileName } from "../StyledComponents/Text";
import { useSelector } from "react-redux";
import { selectConnector } from "../../actions/wallet/walletSlice";
import { Web3ReactHooks } from "@web3-react/core";
import {
  hooks as coinbaseWalletHooks,
  coinbaseWallet,
} from "../../connectors/coinbasewallet";
import { hooks as metaMaskHooks, metaMask } from "../../connectors/metamask";
import {
  hooks as walletConnectHooks,
  walletConnect,
} from "../../connectors/walletconnect";
import BalanceContainer from "./BalanceContainer";
import { Divider } from "../StyledComponents/Divider";
import Link from "next/link";
import Toggle from "../Toggle";

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

interface nft {
  img?: string;
}
const ProfileButton = styled.button<nft>`
  background-image: url(${({ img }) => img});
  background-size: 100% 100%;
  min-height: 56px;
  min-width: 56px;
  border-radius: 50%;
`;
const ProfileWrapper = styled.div<nft>`
  min-height: 56px;
  min-width: 56px;
`;

export default function ProfileIcon() {
  const [isOpen, setIsOpen] = useState(true);
  const user = store.getState().user;
  const [avatar, setAvatar] = useState();

  //////DROPDOWN STARTED///////
  function Menu() {
    const defaultConnector = useSelector(selectConnector);

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

    const accounts: string[] = getDefaultConnector().useAccounts();

    let Buttontag = "";

    const Container = styled.div`
      display: flex;
      position: absolute;
      flex-direction: column;
      right: 0;
      text-align: left;
      margin-right: 100px;
      background: ${({ theme }) => theme.card};
      width: 300px;
      height: max-content;
      border-radius: 15px;
      padding: 20px 0px;
      img {
        max-width: 30px;
        max-height: 30px;
      }
    `;
    const Wrapper = styled.div`
      display: flex;
      padding:10px 20px 0px 20px;
      text-align: left;
      img{
        max-width: 72px;
        min-height: 72px;
      }
    `;
    const Wrappers = styled.div`
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      text-align: left;
      gap: 12px;
    `;
    const Box = styled.div`
      display: flex;
      flex-direction: column;
      margin-left:8px;
    `;

    interface prop {
      margin?: string;
    }
    const MenuItem = styled.div<prop>`
      display: flex;
      text-align: center;
      margin-top: ${(props) => props.margin || "12px"};
      gap: 10px;
    `;

    if (accounts !== undefined && accounts.length > 0) {
      Buttontag =
        accounts[0].substring(0, 9) +
        "..." +
        accounts[0].substring(accounts[0].length - 4);
    } else {
      Buttontag = "";
    }

    const MenuItems = [
      { name: "Edit my profile", url: "/editprofile", icon: "Editprofile" },
      { name: "My items", url: "/", icon: "Myitems" },
      { name: "Apply for KYC / Blue Tick", url: "/signup", icon: "Applykyc" },
      { name: "Manage Settings", url: "/", icon: "Settings" },
      { name: "Communication", url: "/", icon: "Communication" },
      // { name: "Dark theme", url: "", icon: "Theme" },
      // { name: "Disconnect", url: "", icon: "Disconnect" },
    ];

    return (
      <Container>
        <Wrapper>
          <ProfileWrapper>
            <ProfileButton img={avatar}></ProfileButton>
          </ProfileWrapper>

          <Box>
            <ProfileName>{user.nickname}</ProfileName>
            <MenuItem>{Buttontag}</MenuItem>
          </Box>
        </Wrapper>

        <BalanceContainer />

        {MenuItems.map((items) => {
          return (
            <Wrappers>
              <Link
                href={items.url}
                key={items.name}
                target="_blank"
                rel="noreferrer"
              >
                <MenuItem>
                  <img src={`/images/Icons/ProfileMenu/${items.icon}.svg`} />

                  <EditLower>{items.name}</EditLower>
                </MenuItem>
              </Link>
              <Divider />
            </Wrappers>
          );
        })}

        <Wrappers>
          <MenuItem
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <img src={`/images/Icons/ProfileMenu/Theme.svg`} />

              <EditLower>Dark Theme</EditLower>
            </div>

            <Toggle />
          </MenuItem>
          <Divider />

          <MenuItem margin="0px">
            <img src={`/images/Icons/ProfileMenu/Disconnect.svg`} />
            <EditLower>Disconnect</EditLower>
          </MenuItem>
        </Wrappers>

        {/*<MenuItem>1</MenuItem>
        <Divider />
        <MenuItem>1</MenuItem>
        <Divider />
        <MenuItem>1</MenuItem>
        <Divider />
        <MenuItem>1</MenuItem>
        <Divider />
        <MenuItem>1</MenuItem> */}
      </Container>
    );
  }
  //////DROPDOWN FINISHED/////
  useEffect(() => {
    setAvatar(fullImageUrl(user.avatar));
  }, []);

  return (
    <ProfileWrapper>
      <ProfileButton
        onClick={() => setIsOpen(!isOpen)}
        img={avatar}
      ></ProfileButton>
      {isOpen && <Menu></Menu>}
    </ProfileWrapper>
  );
}
