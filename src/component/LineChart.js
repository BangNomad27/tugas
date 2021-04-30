import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart() {
  const labels = ['Jan 21', 'Mar 21', 'May 21', 'Jul 21', 'Sep 21', 'Nov 21'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Stonk for 2021',
        data: [9, 8, 13, 9, 0, 0],
        fill: false,
        tension: 0.1
      }
    ] 
  }

  return (
    <Line data={data} />
  );
}

export default LineChart;