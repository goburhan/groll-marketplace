import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { BlueButton, Transparent } from "./StyledComponents/Button";
import styled from "styled-components";
import signLogin, {
  selectConnector,
  userLogin,
} from "../actions/wallet/walletSlice";
import { connect, useDispatch, useSelector } from "react-redux";
import store from "../app/store";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { getDefaultConnector } from "../app/hooks";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  boxShadow: 24,
  p: 6,
};
const Text = styled.text`
  color: #00acff;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
`;

const Flex = styled(Box)`
  background-color: ${({ theme }) => theme.signModal};
  border-radius: 25px;
  align-items: center;
  gap: 10px;
  display: flex;
  flex-direction: column;
  img {
    margin-bottom: 2rem;
  }
  text {
    margin-bottom: 2rem;
  }
`;
function AcceptSignModal(props: any) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const context = useWeb3React();
  const accounts = getDefaultConnector().useAccounts();
  const dispatch = useDispatch();
  const defaultConnector = useSelector(selectConnector);


  let provider = new ethers.providers.Web3Provider(
    context.provider ? context.provider.provider : window.ethereum
  );

  return (
    <div>
      <BlueButton padding="14px 32px" onClick={handleOpen}>
        Get Started Now
      </BlueButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Flex sx={style}>
            <img src="/images/AcceptSign.svg" alt="modal" />
            <Text>Accept sign in</Text>

            <BlueButton
              padding="14px 32px"
              onClick={() => {
                let timestamp = parseInt(`${new Date().getTime() / 1000}`);
                var message =
                  store.getState().config.loginMessage + " " + timestamp;

                provider.provider
                  .request({
                    method: "personal_sign",
                    params: [message, accounts[0]],
                  })
                  .then((signature) => {
                    console.log(signature);
                    dispatch(
                      userLogin({ coinbase: accounts[0], signature, timestamp })
                    );
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              style={{ width: "100%" }}
            >
              Continue
            </BlueButton>
            <Transparent padding="14px 32px" style={{ width: "100%" }}>
              Cancel
            </Transparent>
          </Flex>
        </Fade>
      </Modal>
    </div>
  );
}
const mapStateToProps = (state) => ({
  state,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AcceptSignModal);
