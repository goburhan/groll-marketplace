import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../styles/Globalstyle';
import Slider1 from '../../../components/Slider/Slider1';
import Slider2 from '../../../components/Slider/Slider2';

const Slidebox = styled.div`
    width: 100vw;
    height: 56vh;
    position: relative;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 74vh;
    }
`;
const SliderWrapper = styled.div`
    width: 100%;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100vw;
    }
`;

export default function Slide() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 250,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <SliderWrapper>
            <Slider {...settings}>
                <Slidebox>
                    <Slider2 />
                </Slidebox>
                <Slidebox>
                    <Slider1 />
                </Slidebox>
                <Slidebox>
                    <Slider1 />
                </Slidebox>
            </Slider>
        </SliderWrapper>
    );
}
