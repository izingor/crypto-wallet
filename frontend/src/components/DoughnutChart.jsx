import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement)
// Chart.overrides[type].plugins.legend

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
		}
	}

	const options = {
		elements: {
			arc: {
				borderWidth: 0,
			},
		},
		plugins: {
			title: {
				display: false,
			},
			legend: {
				display: false,
			},
		},
	}

	return (
		<div>
			<Doughnut options={options} data={coinData()} />
		</div>
	)
}
