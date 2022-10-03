import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Text40 } from '../../components/StyledComponents/Text';
import AllItemCard from '../../components/NftCards/Cards/AllItemCard';
import { WindowSize } from '../../hooks/useWindowsize';

const NftContainer = styled.div`
    text-align: center;
    margin: 8vh 8vw 6vh 8vw;
`;
const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;
const Slidebox = styled.div`
    text-color: white;
`;

export default function Items() {
    const isMobilee = WindowSize();

    const settings = {
        infinite: false,
        speed: 250,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const articles = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
    ];
    const items = [];

    items.push(<AllItemCard nft={'/images/Nft/A1.svg'} />);

    // let gokhan = [];
    // let i = 0;
    // const burhan = async () => {
    //   for (i = 0; i < 10; i++) {
    //     gokhan.push(items);
    //   }
    // };
    // burhan();

    return !isMobilee ? (
        <NftContainer>
            <Flex>
                {articles.map((id, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            // translateX: i % 2 === 0 ? 50 : 50,
                            // translateY: -50,
                        }}
                        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                    >
                        <AllItemCard nft={'/images/Nft/A1.svg'} />
                    </motion.div>
                ))}
            </Flex>
        </NftContainer>
    ) : (
        <NftContainer>
            <Text40 color={({ theme }) => theme.titles}> All Items</Text40>
            <Slider {...settings}>
                <Slidebox>
                    <AllItemCard nft={'/images/Nft/A1.svg'} />
                </Slidebox>
                <Slidebox>
                    <AllItemCard nft={'/images/Nft/A1.svg'} />
                </Slidebox>
                <Slidebox>
                    <AllItemCard nft={'/images/Nft/A1.svg'} />
                </Slidebox>
                <Slidebox>
                    <AllItemCard nft={'/images/Nft/A1.svg'} />
                </Slidebox>
                <Slidebox>
                    <AllItemCard nft={'/images/Nft/A1.svg'} />
                </Slidebox>
                <Slidebox>
                    <AllItemCard nft={'/images/Nft/A1.svg'} />
                </Slidebox>
            </Slider>
        </NftContainer>
    );
}
