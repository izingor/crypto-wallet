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

export const DoughnutChart = ({ coins }) => {
	// const { coins } = activeUser
	console.log(coins)
	const coinLabels = () => {
		const data = coins.map((coin) => coin.symbol)
		return data
	}
	const coinAmounts = coins.map((coin) => coin.amount)

	console.log(coinAmounts)
	const coinData = () => {
		return {
			labels: coinLabels(),
			datasets: [
				{
					data: coinAmounts,
					backgroundColor: [
						'rgba(255, 99, 132, 0.5)',
						'rgba(100, 99, 132, 0.5)',
						'rgba(255, 30, 13, 0.5)',
					],
				},
			],
		}
	}

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
			<Doughnut options={options()} data={coinData()} />
		</div>
	)
}
