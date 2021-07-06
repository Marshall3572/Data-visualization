import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { baseEchartoptions } from '../shared/base-echart-options';
import { createEchartsOptions } from '../shared/create-echats-options';

export const Chart1 = () => {
    // 使用钩子
    const divRef = useRef(null);
    // 挂载后执行
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            ...baseEchartoptions,
            xAxis: {
                data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
                axisTick: { show: false },
                axisLine: {
                    lineStyle: { color: '#083B70' }
                },
                axisLabel: {
                    formatter(val) {
                        if (val.length > 2) {
                            // 在字符串的第二个位置，不删除数据，加一个换行(字符串没有splice，要先把他转换成数组)
                            const array = val.split('')
                            array.splice(2, 0, '\n')
                            return array.join('') // 变回字符串
                        } else return val
                    }
                },
            },
            yAxis: {
                splitLine: { show: false }, // 刻度线
                axisLabel: {
                    fontSize: px(12)
                },
                axisLine: {
                    show: true,
                    lineStyle: { color: '#083B70' }
                },
            },
            series: [{
                name: '销量',
                type: 'bar',
                data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
            }]
        }));
    }, [])
    return (
        <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart"></div>
        </div>
    )
}