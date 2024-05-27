import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Chart
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
);

const LineChart = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed'],
        datasets: [{
            labels: 'Sales of the Week',
            data: [6, 3, 9],
            backgroundColor: '#2563EB',
            borderColor: 'black',
            pointBorderColor: '#2563EB',
            fill: 'red',
            tension: 0.4

        }]
    };

    const options = {
        plugins: {
            // legend: false
        },
        scales: {
            y: {
                min: 3,
                max: 6
            }
        }
    }



  return (
    <div id='revenue-chart'>
        <Line
            data={data}
            options={options}
        >
        </Line>
    </div>
  )
}

export default LineChart