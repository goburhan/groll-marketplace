import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Flex } from '../StyledComponents/Flex';

declare module 'framer-motion' {
    export interface AnimatePresenceProps {
        children?: React.ReactNode;
    }
}

const ButtonParent = styled(motion.div)`
  height: 7rem;
  display: flex;
        white-space: nowrap;
  align-items: center
    justify-content: center;
    img {
      max-width:26px;
    }
`;

const ChildDiv = styled(motion.div)`
    height: 4rem;
    width: 100%;
    display: flex;
    gap: 12px;
    padding: 0px 16px 16px 16px;
    flex-direction: column;
    justify-content: flex-start;
    /* opacity: 0; */
`;

const StyledButton = styled.button`
    height: 1.7rem;
    width: 100%;
    text-align: left;
    margin: 1%;
    border: 1px solid transparent;
    background: transparent;
    color: ${({ theme }) => theme.blackHover};
    font-size: 16px;
`;
const StyledTitle = styled.button`
    text-align: left;
    border: 1px solid transparent;
    background: transparent;
    color: ${({ theme }) => theme.cardTitle};
    font-size: 16px;
`;
const ButtonParentVariants = {
    closed: {
        height: '4rem',
        transition: {
            duration: '0.4',
            when: 'afterChildren',
            staggerChildren: 0.3,
        },
    },
    open: {
        height: '11rem',
        transition: {
            duration: '0.1',
        },
    },

};

const ChildVariants = {
    closed: {
        opacity: '0',
        // x: "100vh"
    },
    open: {
        opacity: '1',
        delay: '0.4',
        // x: "0",
        transition: {
            duration: '0.4',
        },
    },
    exit: {
        opacity: '0',
        // x: "-100vh",
        // delay: "4"
    },
};

const TitleWrapper = styled.button`
display: flex;
gap: 12px;
white-space: nowrap;
align-items: center;
padding: 12px 20px;
justify-content: space-between;
&:hover {
    cursor: pointer;
    background-color: #282b38;
    border-radius: 8px;
}

`;

const Buttons = ({ first, second, third, title, hover, icons }) => {
    const [isOpen, toggleOpen] = useState(false);

   
    const ArrowButton = styled.img`
        ${isOpen && 'transform: rotate(180deg);  transition: 0.5s;'}
    `;

    useEffect(() => {
        if (!hover) {
            toggleOpen(false);
        }
    }, [hover]);

    return (
        <AnimatePresence>
            <ButtonParent
                key="parent"
                variants={ButtonParentVariants}
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
            >
                <Flex wrap="nowrap" direction="column">
                    <TitleWrapper onClick={() => toggleOpen(!isOpen)}>
                        <img
                            src={`/images/Icons/Sidemenu/${icons}.svg`}
                            alt="socialmedia"
                        />

                        {hover && (
                            <>
                                <StyledTitle
                                    onClick={() => {
                                        toggleOpen(!isOpen);
                                    }}
                                >
                                    <>{title}</>
                                </StyledTitle>
                            </>
                        )}

                        {hover && (
                            <ArrowButton src="/images/Icons/Sidemenu/Arrow.svg" />
                        )}
                    </TitleWrapper>

                    {isOpen && (
                        <>
                            <ChildDiv
                                key="child"
                                variants={ChildVariants}
                                initial="closed"
                                animate={open ? 'open' : 'closed'}
                                exit="exit"
                            >
                                {' '}
                                <StyledButton>{first}</StyledButton>
                                <StyledButton>{second}</StyledButton>
                                <StyledButton>{third}</StyledButton>
                            </ChildDiv>
                        </>
                    )}
                </Flex>
            </ButtonParent>
        </AnimatePresence>
    );
};

export default Buttons;
