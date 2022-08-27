import React from 'react'
import styled from 'styled-components'
import Bottom from './Bottom';
import Center from './Center';
import NftWrapper from './NftWrapper';

interface NftCard {
}

const Block = styled.div`
  background: #ffffff;
  border-radius: 2px;
  margin: 5px 5px 10px;
  padding: 5px;
  position: relative;
  box-shadow: 2px 2px 4px 0px #cfd8dc;
`;
Card.Image = Center;
Card.Text = NftWrapper;
Card.Title = Bottom;

export default function Card() {
  return (
    <div>index</div>
  )
}
