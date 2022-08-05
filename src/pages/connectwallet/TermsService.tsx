import React from "react";
import Terms from "./Terms";
import styled from "styled-components";
import motion from "framer-motion";

export default function TermsService({ selected }) {

    const ChildVariants = {
        closed: {
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        },
    
        open: {
          opacity: 1,
          y: ["0vw", "0vw"],
          x: ["16vw", "12vw"],
          transition: {
            duration: 0.3,
          },
        },
        exit: {
          opacity: 0,
          y: ["0vw", "0vw"],
          x: ["12vw", "-1vw"],
          transition: {
            duration: 0.4,
          },
        },
      };
  return (
    <>
    {selected === "" ? <img src="/images/coinwallet.png" /> : <Terms />}</>
  );
}
