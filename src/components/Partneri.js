import React, { useState } from "react";

import Carousel from "react-elastic-carousel";

import Item from "./Item";
import logopartneri from '../slike/logopartneri.jpg';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

export default function Partneri() {
  return (
    <>
      <h1 className='h11' id="Nasipartneri">Ovo su naši partneri</h1>
      <div>
        <Carousel breakPoints={breakPoints}> 
          <Item><img src={logopartneri}></img></Item>
          <Item><img src={logopartneri}></img></Item>
          <Item><img src={logopartneri}></img></Item>
          <Item><img src={logopartneri}></img></Item>
          <Item><img src={logopartneri}></img></Item>
          <Item><img src={logopartneri}></img></Item>
        </Carousel>
      </div>
    </>
  );
}
