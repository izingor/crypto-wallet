import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { onBuyModalChanged } from '../store/modules/ui.store';
import { coinState, getCoin } from '../store/modules/coin.store';
import { user } from '../store/modules/user.store';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { CoinDetailsTableRow } from '../components/CoinDetailsTableRow';
import { CoinLineChart } from '../components/CoinLineChart';
import { SmallBtn } from '../components/buttons/SmallBtn';

export const CoinDetailsPage = () => {
	const { coinId } = useParams();
	const history = useHistory();
	const { coin } = useSelector(coinState);
	const activeUser = useSelector(user);
	const dispatch = useDispatch();

	const marketCapBil = () => {
		return (coin.marketCap / 10e8).toFixed(2) + ' Billion';
	};
	useEffect(() => {
		dispatch(getCoin(coinId));
	}, []);

	const onBuyBtnClicked = ({ name, price, iconUrl, uuid, symbol }) => {
		if (!activeUser) {
			history.push('/login');
			return;
		}
		dispatch(onBuyModalChanged({ name, price, iconUrl, uuid, symbol }));
	};

	return (
		<section className="container items-center justify-center py-8">
			{coin ? (
				<div className="bg-white shadow overflow-hidden sm:rounded-lg">
					{/* <div className="px-4 py-5 sm:px-6 flex items-center justify-center">
						<h3>{coin.symbol}</h3>
					</div> */}
					<div className="border-t border-gray-200">
						<dl>
							<CoinDetailsTableRow
								isGrey={true}
								dd={<img src={coin.iconUrl} alt="" className="w-8 h-8" />}
								btn={
									<SmallBtn
										isGrey={false}
										txt="Buy"
										type="buy"
										handleClick={onBuyBtnClicked}
									/>
								}
							/>
							<CoinDetailsTableRow isGrey={false} dt="Name" dd={coin.name} />
							<CoinDetailsTableRow
								isGrey={true}
								dt="Website"
								dd={
									<a
										href={coin.websiteUrl}
										className="mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2"
									>
										{coin.websiteUrl}
									</a>
								}
							/>
							<CoinDetailsTableRow
								isGrey={false}
								dt="Price(USD)"
								dd={coin.price}
							/>
							<CoinDetailsTableRow
								isGrey={true}
								dt={`All time high(USD)`}
								dd={coin.allTimeHigh.price}
							/>
							<CoinDetailsTableRow
								isGrey={false}
								dt={`Total Supply`}
								dd={coin.supply.total}
							/>
							<CoinDetailsTableRow
								isGrey={true}
								dt="Market Cap"
								dd={marketCapBil()}
							/>
							<CoinDetailsTableRow
								isGrey={false}
								// dd={<CoinLineChart sparkline={coin.sparkline} />}
								chart={<CoinLineChart sparkline={coin.sparkline} />}
							/>
						</dl>
					</div>
				</div>
			) : (
				<LoadingSpinner />
			)}
		</section>
	);
};
