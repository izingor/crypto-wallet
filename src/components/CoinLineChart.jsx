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

export const CoinLineChart = ({ sparkline, isTicksAndBorders = true }) => {
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
					data: sparkline,
					borderColor: 'rgb(255, 99, 132)',
					backgroundColor: 'rgba(255, 99, 132, 0.5)',
					borderWidth: 1,
				},
			],
		};
	};

	const options = () => {
		return {
			elements: {
				point: {
					pointStyle: 'point',
					radius: 0,
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
						drawBorder: isTicksAndBorders,
					},
					ticks: {
						display: isTicksAndBorders,
					},
				},
				x: {
					grid: {
						display: false,
						drawBorder: isTicksAndBorders,
					},
					ticks: {
						display: isTicksAndBorders,
					},
				},
			},
		};
	};

	return (
		<div>
			<Line options={options()} data={coinData()} width={74} height={24} />
		</div>
	);
};
