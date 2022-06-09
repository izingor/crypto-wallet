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
import { DataDisplayContainer } from '../components/DataDisplayContainer';

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

	const onBuyBtnClicked = () => {
		if (!activeUser) {
			history.push('/login');
			return;
		}
		dispatch(onBuyModalChanged());
	};

	const webSiteLink = coin && (
		<a
			href={coin.websiteUrl}
			className="mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2"
		>
			{coin.websiteUrl}
		</a>
	);

	const buyBtn = (
		<SmallBtn
			isGrey={false}
			txt="Buy"
			type="buy"
			handleClick={onBuyBtnClicked}
		/>
	);

	return (
		<section className="container items-center justify-center py-8">
			{coin ? (
				<DataDisplayContainer
					rows={[
						<CoinDetailsTableRow
							key="icon"
							isGrey={true}
							dd={<img src={coin.iconUrl} alt="" className="w-8 h-8" />}
							btn={buyBtn}
						/>,
						<CoinDetailsTableRow
							key="name"
							isGrey={false}
							dt="Name"
							dd={coin.name}
						/>,
						<CoinDetailsTableRow
							key="website"
							isGrey={true}
							dt="Website"
							dd={webSiteLink}
						/>,
						<CoinDetailsTableRow
							isGrey={false}
							dt="Price(USD)"
							dd={coin.price}
						/>,
						<CoinDetailsTableRow
							key="allTimeHigh"
							isGrey={true}
							dt={`All time high(USD)`}
							dd={coin.allTimeHigh.price}
						/>,
						<CoinDetailsTableRow
							key="totalSupply"
							isGrey={false}
							dt={`Total Supply`}
							dd={coin.supply.total}
						/>,
						<CoinDetailsTableRow
							key="marketCap"
							isGrey={true}
							dt="Market Cap"
							dd={marketCapBil()}
						/>,
						<CoinDetailsTableRow
							key="chart"
							isGrey={false}
							chart={<CoinLineChart sparkline={coin.sparkline} />}
						/>,
					]}
				/>
			) : (
				<LoadingSpinner />
			)}
		</section>
	);
};
