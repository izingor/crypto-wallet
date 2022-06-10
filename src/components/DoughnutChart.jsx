import { Doughnut } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

export const DoughnutChart = ({ coins, isTicksAndBorders = true }) => {
	console.log(coins)
	// const labels = () => {
	// 	const data = coins.map((coin) => {

	// 	})
	// 	return data
	// }

	// const coinData = () => {
	// 	return {
	// 		labels,
	// 		datasets: [
	// 			{
	// 				data: sparkline,
	// 				backgroundColor: [
	// 					'rgba(255, 99, 132, 0.5)',
	// 					'rgba(100, 99, 132, 0.5)',
	// 					'rgba(255, 30, 13, 0.5)',
	// 				],
	// 			},
	// 		],
	// 	}
	// }

	const options = () => {
		return {
			elements: {},
			layout: {
				autoPadding: false,
				padding: 0,
			},
			responsive: true,
			plugins: {
				legend: false,
			},
			scales: {},
		}
	}

	return (
		<div>
			{/* <Doughnut options={options()} data={coinData()} width={74} height={24} /> */}
		</div>
	)
}
