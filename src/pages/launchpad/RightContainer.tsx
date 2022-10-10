import LinearProgress, {
    linearProgressClasses,
} from '@mui/material/LinearProgress';
import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../components/StyledComponents/Flex';
import { Text14, Text48 } from '../../components/StyledComponents/Text';

export default function RightContainer() {
    const BorderLinearProgresss = styled(LinearProgress)`
        padding: 8px;
        width: 100%;
        border-radius: 50px;
        margin-top: 10px;
        &.${linearProgressClasses.colorPrimary} {
            background-color: rgba(0, 172, 255, 0.2);
        }
        & .${linearProgressClasses.bar} {
            border-radius: 5px;
            background-color: #00acff;
            opacity: 1;
        }
    `;
    return (
        <Flex gap='32px' direction="column">
            <div>
                <img src="/images/LaunchpadPage.svg" alt="launchpad" />
                <BorderLinearProgresss variant="determinate" value={10} />
            </div>
            <Flex width='80%' direction="column" gap="12px">
                <Flex>
                    <img src="/images/Icons/Team.svg" alt="team" />
                    <Text48>Team</Text48>
                </Flex>
                <Text14 color={({ theme }) => theme.titles}>
                    Dada loving documentarist and multidisciplinary artist
                    livingin Oslo, Norway. I use original photography, audio,
                    video and text to alter and derail established cultural
                    narratives. Goldsmiths made me do it.
                </Text14>
            </Flex>
        </Flex>
    );
}
