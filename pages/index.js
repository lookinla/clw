import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';
import ItemCarousel from '../Components/carousel/ItemCarousel';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;

export default function Home() {
  return (
    <>
      <h1>California Light Works</h1>
      <ItemCarousel />
    </>
  );
}
