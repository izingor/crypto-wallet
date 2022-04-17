import { Component } from 'react'
import { cryptoService } from '../services/crypto.service'
import { Chart } from '../components/Chart'

export class StatisticPage extends Component {
	state = {
		tradeVolume: null,
	}

	yValues = []

	async componentDidMount() {
		try {
			const tradeVolume = await cryptoService.getRates()
			this.setState({ tradeVolume })
		} catch (err) {
			console.log('had an error getting your rates', err.message)
		}
	}

	render() {
		const { tradeVolume } = this.state
		if (tradeVolume) {
			tradeVolume.values.forEach((item) => this.yValues.push(item.y))
		}

		return (
			<section className='statistic-page container'>
				<div className='trade-volume'>
					<h2>Trade Volume Graph</h2>
					{tradeVolume ? <Chart yValues={this.yValues} /> : <div>Loading</div>}
				</div>
			</section>
		)
	}
}
