import React, { useEffect, useRef } from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import { Chart1 } from '../components/chart-1';
import { Chart2 } from '../components/chart-2';


export const Home = () => {
  const year = new Date().getFullYear();
  const mouth = new Date().getMonth()+1;
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerBg})` }} />
      <main>
        <section className="section1">
          <Chart1 />
          <Chart2 />
        </section>
        <section className="bordered section2"></section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
      <footer>Made by Marshall in {year}.{mouth < 10 ? "0"+mouth : mouth}</footer>
    </div>
  );
};
