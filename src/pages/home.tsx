import React, { useEffect, useRef } from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import * as echarts from 'echarts';

// 设置表格字体大小
const px = (n) => n / 2420 * (window as any).pageWidth;

export const Home = () => {
  // 使用钩子
  const divRef = useRef(null);
  // 挂载后执行
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      textStyle: {
        fontSize: px(12),
        color: '#79839e'
      },
      title: {show: false},
      legend: {show: false},
      xAxis: {
        data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12),
          formatter(val){
            if(val.length > 2){
              // 在字符串的第二个位置，不删除数据，加一个换行(字符串没有splice，要先把他转换成数组)
              const array = val.split('')
              array.splice(2, 0, '\n')
              return array.join('') // 变回字符串
            }else return val
          }
        },
      },
      // 设置表单与四边的距离
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
        // containLabel:true
      },
      yAxis: {
        splitLine: {show: false}, // 刻度线
        axisLabel: {
          fontSize: px(12)
        },
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
      },
      series: [{
        name: '销量',
        type: 'bar',
        data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
      }]
    });
  }, [])

  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerBg})` }} />
      <main>
        <section className="section1">
          <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart"></div>
          </div>
        </section>
        <section className="bordered section2"></section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
    </div>
  );
};
