import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Text40 } from '../../../components/StyledComponents/Text';

export const Title = styled(Text40)`
    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 36px;
    }
`;
export default Title;

export const WalletWrapper = styled(motion.button)`
    background: transparent;
    cursor: pointer;
    display: flex;
    padding: 20px;
    align-items: center;
    width: 100%;
    div {
        display: flex;
        align-items: center;
        img {
            max-height: 64px;
        }
    }
    img {
        margin-right: 12px;
    }
    :hover {
        text {
            color: #ebebed;
        }
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        padding: 20px 4px;
    }
`;
