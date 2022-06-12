import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

export const DoughnutChart = ({ data, backgroundColor, labels }) => {
	const coinData = () => {
		return {
			labels: labels,
			datasets: [
				{
					data,
					backgroundColor,
				},
			],
		};
	};

	const options = {
		legend: {
			// display: true,
			// position: 'right',
		},
		elements: {
			arc: {
				borderWidth: 0,
			},
		},
		plugins: {
			legend: {
				position: 'right',
			},
		},
	};

	return (
		<div>
			<Doughnut options={options} data={coinData()} />
		</div>
	);
};
