import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const  BarChartComponent = () => {
  return (
    <BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
      ]}
      height={350}
      xAxis={[{ data: ['2020', '2021', '2022', '2023'], scaleType: 'band' }]}
      margin={{ top: 5, bottom: 20, left: 1, right: 1 }}
    />
  );
}

export default BarChartComponent;
