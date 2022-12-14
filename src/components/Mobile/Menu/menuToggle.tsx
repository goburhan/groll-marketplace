import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Button = styled.div`
  z-index: 99;
  cursor: pointer;
`;

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.3 };

export function MenuToggle({ toggle, isOpen }) {
  return (
    <Button onClick={toggle}>
      <svg width="35" height="35" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 10 2.5 L 20 2.5", stroke: "#fff" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "#fff" },
          }}
          transition={transition}
        />
        <Path
          d="M 14 9.423 L 20 9.423"
          stroke="hsl(0, 0%, 100%)"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 4 16.346 L 20 16.346", stroke: "#fff" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "#fff" },
          }}
          transition={transition}
        />
      </svg>
    </Button>
  );
}
