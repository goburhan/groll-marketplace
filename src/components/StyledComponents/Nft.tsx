import styled from 'styled-components';
import { Background } from '../../app/types';

export const Nft = styled.div<Background>`
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 16px;
    width: 100%;
    height: 100%;
`;
export default Nft;
