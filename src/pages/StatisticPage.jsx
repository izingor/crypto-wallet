import { cryptoService } from '../services/crypto.service'
import { Chart } from '../components/Chart'
import { useEffect, useState } from 'react'

export function StatisticPage() {
	const [tradeVolume, setTradeVolume] = useState(null)

	const yValues = []

	useEffect(() => {
		const getTradeVolume = async () => {
			const tradeVolume = await cryptoService.getRates()
			setTradeVolume(tradeVolume)
		}
		getTradeVolume()
	})

	if (tradeVolume) {
		tradeVolume.values.forEach((item) => yValues.push(item.y))
	}

	return (
		<section className='statistic-page container'>
			<div className='trade-volume'>
				<h2>Trade Volume Graph</h2>
				{tradeVolume ? <Chart yValues={yValues} /> : <div>Loading</div>}
			</div>
		</section>
	)
}
