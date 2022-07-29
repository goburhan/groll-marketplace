import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeTitles, Title } from "../../components/StyledComponents/Text";
import AllItemCard from "../../components/NftCards/Cards/AllItemCard";
import BigItemCard from "../../components/NftCards/Cards/BigItemCard";
import { WindowSize } from "../../hooks/useWindowsize";
import { motion } from "framer-motion";

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

  let items = [];

  items.push(<AllItemCard />);

  let gokhan = [];
  let i = 0;
  const burhan = async () => {
    for (i = 0; i < 10; i++) {
      gokhan.push(items);
    }
  };
  burhan();

  return !isMobilee ? (
    <NftContainer>
      <Flex>
      {articles.map((id, i) => (
        <motion.div
          initial={{
            opacity: 0,
            // translateX: i % 2 === 0 ? 50 : 50,
            // translateY: -50,
          }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
            <AllItemCard />
          
        </motion.div>
      ))}
      </Flex>

    </NftContainer>
  ) : (
    <NftContainer>
      <HomeTitles> All Items</HomeTitles>
      <Slider {...settings}>
        <Slidebox>
          <AllItemCard />
        </Slidebox>
        <Slidebox>
          <AllItemCard />
        </Slidebox>
        <Slidebox>
          <AllItemCard />
        </Slidebox>
        <Slidebox>
          <AllItemCard />
        </Slidebox>
        <Slidebox>
          <AllItemCard />
        </Slidebox>
        <Slidebox>
          <AllItemCard />
        </Slidebox>
      </Slider>
    </NftContainer>
  );
}
