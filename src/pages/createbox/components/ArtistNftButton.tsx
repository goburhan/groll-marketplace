import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import MysteryContent from './MysteryContent';

export default function ArtistNftButton({ setProgress }) {
    const [open, toggleOpen] = useState(false);
    const [disable, setDisable] = useState(false);

    const Section = styled(motion.section)`
        display: grid;
        gap: 50px 30px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-template-rows: repeat(auto-fill, minmax(230px, 230px));
    `;

    const StyledTitle = styled(motion.button)`
        text-align: left;
        border: 1px solid transparent;
        background: transparent;
        color: ${({ theme }) => theme.cardTitle};
        font-size: 32px;
        font-weight: bold;
        letter-spacing: -0.01em;
        z-index: 100;
    `;

    interface prop {
        width?: string;
        direction?: string;
        size?: string;
        mr?: string;
        innerRef?: any;
        mb?: any;
        gap?: any;
        disabled?: any;
    }

    const ButtonWrapper = styled(motion.button)<prop>`
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        img {
            max-height: 12px;
        }
        z-index: 100;
    `;

    const ChildVariants = {
        closed: {
            opacity: 0,
            height: '0rem',
            transition: {
                duration: 0.5,
            },
        },

        open: {
            height: '100%',
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
        exit: {
            opacity: 0,
            height: '0rem',
            y: [0, -30],
            transition: {
                duration: 0.5,
            },
        },
    };

    const ButtonParentVariants = {
        closed: {
            opacity: 1,
            height: '100px',
            transition: {
                duration: 0.5,
            },
        },
        open: {
            height: '100px',
            opacity: 1,
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                margin: '40px 0px 0px 0px',
            }}
        >
            <div style={{ width: '100%' }}>
                <AnimatePresence>
                    <ButtonWrapper
                        key="parent"
                        initial="closed"
                        variants={ButtonParentVariants}
                        animate={open ? 'open' : 'closed'}
                        onClick={() => toggleOpen(!open)}
                        disabled={disable}
                    >
                        <StyledTitle style={{ cursor: 'pointer' }}>
                            Artist Nft&apos;s
                        </StyledTitle>

                        {open ? (
                            <img
                                src="/images/Staticlogos/Uparrow.svg"
                                alt="arrow"
                            />
                        ) : (
                            <img
                                src="/images/Staticlogos/Downarrow.svg"
                                alt="arrow"
                            />
                        )}
                    </ButtonWrapper>

                    {open && (
                        <Section
                            key="child"
                            initial="closed"
                            animate="open"
                            exit="exit"
                            variants={ChildVariants}
                        >
                            <MysteryContent setProg={setProgress} />
                        </Section>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
