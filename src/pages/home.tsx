import React, { useEffect, useRef } from 'react';
import './home.scss';
import headerBg from '../images/header.jpg';
import { Chart1 } from '../components/chart-1';
import { Chart2 } from '../components/chart-2';
import { Chart3 } from '../components/chart-3';
import { Chart4 } from '../components/chart-4';
import { Chart5 } from '../components/chart-5';

export const Home = () => {
  const year = new Date().getFullYear();
  const mouth = new Date().getMonth() + 1;
  const day = new Date().getDate();
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerBg})` }} />
      <main>
        <section className="section1">
          <Chart1 />
          <Chart2 />
        </section>
        
        <section className="bordered section2"><Chart3 /><Chart4 /></section>
        <section className="bordered section3">
          <Chart5 />
        </section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
      <footer>
        The time now is {year}.{mouth < 10 ? "0" + mouth : mouth}.{day < 10 ? "0" + day : day}
        <div>
          Made By Marshall_Liu in 2021
        </div>
      </footer>
    </div>
  );
};
