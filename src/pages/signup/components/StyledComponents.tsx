import styled from 'styled-components';
import { Text40 } from '../../../components/StyledComponents/Text';

export const StyledSteps = styled(Text40)`
    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 32px;
        line-height: ${(props) => props.lineHeight};
    }
`;
export default StyledSteps;
