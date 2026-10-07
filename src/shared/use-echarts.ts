import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import * as echarts from 'echarts';

export const useEcharts = (
  containerRef: RefObject<HTMLDivElement>,
  createOptions: () => echarts.EChartsOption
) => {
  const optionsRef = useRef(createOptions);
  optionsRef.current = createOptions;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chart = echarts.init(container);
    chart.setOption(optionsRef.current());
    let width = container.clientWidth;
    let height = container.clientHeight;
    let resizeFrame = 0;

    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        const nextWidth = container.clientWidth;
        const nextHeight = container.clientHeight;
        if (nextWidth === width && nextHeight === height) return;
        width = nextWidth;
        height = nextHeight;
        chart.resize();
        // 重新计算像素尺寸，缩放时保留图例选择并避免重复播放动画。
        chart.setOption({ ...optionsRef.current(), animation: false });
      });
    });
    observer.observe(container);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(resizeFrame);
      chart.dispose();
    };
  }, [containerRef]);
};
