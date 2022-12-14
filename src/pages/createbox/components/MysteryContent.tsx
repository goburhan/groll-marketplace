import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Flex } from '../../../components/StyledComponents/Flex';
import { Nft } from '../../../components/StyledComponents/Nft';
import CustomizedCheckbox from '../../../components/Checkbox';

const NftBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: linear-gradient(180deg, #22242f 4.65%, #1a1d28 86.94%);
    border: 1px solid #484d57;
    border-radius: 12px;
    padding: 14px;
    min-height: 240px;
`;
const Mysterybox = [
    { name: '/images/Nft/1.svg' },
    { name: '/images/Nft/2.svg' },
    { name: '/images/Nft/3.svg' },
    { name: '/images/Nft/4.svg' },
    { name: '/images/Nft/5.svg' },
    { name: '/images/Nft/6.svg' },
    { name: '/images/Nft/hot1.svg' },
    { name: '/images/Nft/2.svg' },
    { name: '/images/Nft/3.svg' },
    { name: '/images/Nft/4.svg' },
    { name: '/images/Nft/5.svg' },
    { name: '/images/Nft/6.svg' },
    { name: '/images/Nft/hot1.svg' },
    { name: '/images/Nft/hot2.svg' },
    { name: '/images/Nft/hot3.svg' },
    { name: '/images/Nft/Up1.svg' },
    { name: '/images/Nft/hot2.svg' },
    { name: '/images/Nft/hot3.svg' },
    { name: '/images/Nft/Up1.svg' },
    { name: '/images/Nft/4.svg' },
    { name: '/images/Nft/5.svg' },
    { name: '/images/Nft/6.svg' },
    { name: '/images/Nft/hot1.svg' },
    { name: '/images/Nft/2.svg' },
    { name: '/images/Nft/3.svg' },
    { name: '/images/Nft/4.svg' },
    { name: '/images/Nft/5.svg' },
    { name: '/images/Nft/6.svg' },
    { name: '/images/Nft/hot1.svg' },
    { name: '/images/Nft/hot2.svg' },
    { name: '/images/Nft/hot3.svg' },
    { name: '/images/Nft/Up1.svg' },
    { name: '/images/Nft/hot2.svg' },
    { name: '/images/Nft/hot3.svg' },
    { name: '/images/Nft/Up1.svg' },
];
export default function MysteryContent({ setProg }) {
    const [checkedState, setCheckedState] = useState(
        new Array(Mysterybox.length).fill(false)
    );
    const [value, setValue] = useState(0);

    function CheckTrue(index) {
        return index === true;
    }
    let Checked;

    useEffect(() => {
        Checked = checkedState.filter(CheckTrue);
        setValue(Checked.length);
        console.log(value);
    }, [checkedState]);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState
            .map((item, index) => (index === position ? !item : item));

        setCheckedState(updatedCheckedState);
    };

    return (
        <>
            {Mysterybox.map((nfts, index) => (
                // eslint-disable-next-line react/jsx-key
                <NftBoxWrapper>
                    <Nft img={nfts.name} />
                    <Flex>
                        <CustomizedCheckbox
                            id={`custom-checkbox-${index}`}
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                        />
                    </Flex>
                </NftBoxWrapper>
            ))}
        </>
    );
}
