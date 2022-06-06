import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const CoinChart = ({ sparkline }) => {
	const xAxis = () => {
		const data = [];
		sparkline.forEach((price, idx) => {
			data.push(idx);
		});
		return data;
	};

	const coinData = () => {
		return {
			labels: xAxis(),
			datasets: [
				{
					label: 'Dataset 1',
					data: sparkline,
					borderColor: 'rgb(255, 99, 132)',
					backgroundColor: 'rgba(255, 99, 132, 0.5)',
				},
			],
		};
	};

	const options = () => {
		return {
			elements: {
				point: {
					pointStyle: 'dash',
				},
			},
			layout: {
				autoPadding: false,
				padding: 0,
			},
			responsive: true,
			plugins: {
				legend: false,
			},
			scales: {
				y: {
					max: Math.max(...sparkline),
					min: Math.min(...sparkline),
					grid: {
						display: false,
					},
				},
				x: {
					grid: {
						display: false,
					},
				},
			},
		};
	};

	return (
		<div>
			sparkline && <Line options={options()} data={coinData()} />
		</div>
	);
};
