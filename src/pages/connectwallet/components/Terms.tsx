import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Text14 } from '../../../components/StyledComponents/Text';
import { Transparent } from '../../../components/StyledComponents/Button';
import AcceptSignModal from '../../../components/AcceptSignModal';
import CustomizedCheckbox from '../../../components/Checkbox';
import Header from './StyledComponents';

interface boxprops {
    justify?: any;
    gap?: any;
}
const Flex = styled(motion.div)`
width: 80%;
display: flex;
position: absolute;
flex-direction: column;
text-align: left;
div {
}
img {
    border: 1px solid transparent;
    border-radius: 25px;
}
@media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    position: initial;
}
`;
const Box = styled.div<boxprops>`
        display: flex;
        text-align: left;
        align-items: center;
        gap: ${(props) => props.gap};
        justify-content: ${({ justify }) => justify};
        margin-bottom: ${(props) => props.gap};
    `;

const Text12 = styled.text`
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        margin-top: 8px;
        margin-top: ${({ theme }) => theme.mt};
        color: ${({ theme }) => theme.gray};

        span {
            color: ${({ theme }) => theme.blue};
        }
    `;

export default function Terms() {
    // const [checked, setChecked] = React.useState(true);

    // const handleChange = (event) => {
    //     setChecked(event.target.checked);
    // };

    return (
        <Flex>
            <Header color={({ theme }) => theme.titles} letterSpacing="-0.03em">
                Terms of service
            </Header>
            <Text12 style={{ marginTop: '8px', marginBottom: '38px' }}>
                Please take a few minutes to read and understand &nbsp;
                <span>Stacks Terms of Service.</span> To continue, you’ll need
                to accept the terms of services by checking the boxes.
            </Text12>
            <img src="/images/Termsimg.svg" alt="terms" />

            <div>
                <Box gap="10px" style={{ marginTop: '38px' }}>
                    <CustomizedCheckbox />
                    <Text14 color={({ theme }) => theme.lowerdetail}>
                        I am at least 13 year old
                    </Text14>
                </Box>
                <Box gap="0px 10px" style={{ marginBottom: '38px' }}>
                    <CustomizedCheckbox />
                    <Text14 color={({ theme }) => theme.lowerdetail}>
                        I agree Stack terms of service
                    </Text14>
                </Box>
            </div>

            <Box gap="10px">
                <Transparent padding="16px 32px">Cancel</Transparent>
                <AcceptSignModal />
            </Box>
        </Flex>
    );
}
