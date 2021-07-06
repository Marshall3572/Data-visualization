import { px } from '../shared/px';

export const baseEchartoptions = {
    textStyle: {
        fontSize: px(12),
        color: '#79839e'
    },
    title: { show: false },
    legend: { show: false },
    // 调整表格到四周到距离
    grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
        // containLabel:true
    }
}