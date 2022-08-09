import React from "react";
import Terms from "./Terms";
import styled from "styled-components";
import motion from "framer-motion";

export default function TermsService({ selected }) {
  return (
    <>{selected === "" ? <img src="/images/coinwallet.png" /> : <Terms />}</>
  );
}
