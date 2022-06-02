import { coinState, getCoins } from '../store/modules/coin.store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const RatesPage = () => {
	// const [tradeVolume, setTradeVolume] = useState(null);
	const { coins, status } = useSelector(coinState);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCoins());
	},[]);

	return (
		<section className="statistic-page container">
			<div className="trade-volume">
				<h2>Trade Volume Graph</h2>
			</div>
		</section>
	);
};
