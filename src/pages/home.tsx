import React from 'react';
import './home.scss';
import headerBg from '../images/header.jpg';
import { Chart1 } from '../components/chart-1';
import { Chart2 } from '../components/chart-2';
import { Chart3 } from '../components/chart-3';
import { Chart4 } from '../components/chart-4';
import { Chart5 } from '../components/chart-5';
import { Chart6 } from '../components/chart-6';
import { Chart7 } from '../components/chart-7';
import { Chart8 } from '../components/chart-8';
import { Chart9 } from '../components/chart-9';

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
        <section className="section4">
          <Chart6 />
          <div className="bordered 年龄段">
            <h2>犯罪人员年龄段分布</h2>
            <div className="charts">
              <Chart7 />
              <Chart8 />
              <Chart9 />
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="bordered row1 案发类型">
            <h2>案发类型统计</h2>
            <div className="charts">

            </div>
          </div>
          <div className="bordered row2 案发街道">
            <h2>案发街道统计</h2>
            <div className="charts">

            </div>
          </div>
          <div className="bordered row3 作案手段">
            <h2>作案手段分析</h2>
          </div>
        </section>
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
