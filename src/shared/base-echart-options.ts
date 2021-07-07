import { px } from '../shared/px';

export const baseEchartOptions = {
    textStyle: {
        fontSize: px(12),
        color: '#79839e'
    },
    title: { show: false },
    legend: { show: false },
    // 调整表格到四周到距离
    grid: {
        x: px(20),
        y: px(20),
        x2: px(20),
        y2: px(20),
        containLabel:true
    }
}