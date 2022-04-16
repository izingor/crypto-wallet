import { Component } from 'react';
import { cryptoService } from '../services/crypto.service';
import { Chart } from './Chart';

export class StatisticPage extends Component {
	state = {
		tradeVolume: null,
	};
    
    yValues = [];
    
	async componentDidMount() {
		try {
			const tradeVolume = await cryptoService.getRates();
			const state = await this.setState({ tradeVolume });
			await Promise.all([tradeVolume, state]);
		} catch (err) {
			console.log('had an error getting your rates', err.message);
		}
	}

	render() {
		const { tradeVolume } = this.state;
        if(tradeVolume){
            tradeVolume.values.forEach(item => this.yValues.push(item.y))
            console.log(tradeVolume.values);
        }


		return (
			<section className="statistic-page">
				{tradeVolume ? <Chart yValues={this.yValues} /> : ''}
			</section>
		);
	}
}
