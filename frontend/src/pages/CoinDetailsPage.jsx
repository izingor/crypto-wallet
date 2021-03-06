import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { onBuyModalChanged } from '../store/modules/ui.store';
import { coinState, getCoin, resetCoin } from '../store/modules/coin.store';
import { userState } from '../store/modules/user.store';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { DataDisplayRow } from '../components/DataDisplayRow';
import { LineChart } from '../components/charts/LineChart';
import { SmallBtn } from '../components/buttons/SmallBtn';
import { DataDisplayContainer } from '../components/DataDisplayContainer';
import { utilsService } from '../services/utils.service';

export const CoinDetailsPage = () => {
	const { coinId } = useParams();
	const history = useHistory();
	const { coin } = useSelector(coinState);
	const { user } = useSelector(userState);
	const dispatch = useDispatch();

	const marketCapBil = () => {
		return (coin.marketCap / 10e8).toFixed(2) + ' Billion';
	};

	useEffect(() => {
		dispatch(getCoin(coinId));
		console.log('getting the coin')
	}, [coinId]);

	const color = utilsService.changeColor(coin?.change, true);

	const onBuyBtnClicked = () => {
		if (!user) {
			history.push('/login');
			return;
		}
		dispatch(onBuyModalChanged());
	};

	const onBackBtnClicked = () => {
		history.goBack();
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

	const backBtn = (
		<SmallBtn
			isGrey={false}
			txt="Back"
			type="back"
			handleClick={onBackBtnClicked}
		/>
	);

	return (
		<section className="container flex flex-col justify-center min-h-fit items-center py-8">
			{coin ? (
				<DataDisplayContainer
					key="coinDisplayContainer"
					rows={[
						<DataDisplayRow
							key="icon"
							isGrey={true}
							dd={<img src={coin.iconUrl} alt="" className="w-8 h-8" />}
							buyBtn={buyBtn}
							backBtn={backBtn}
						/>,
						<DataDisplayRow
							key="name"
							isGrey={false}
							dt="Name"
							dd={coin.name}
						/>,
						<DataDisplayRow
							key="website"
							isGrey={true}
							dt="Website"
							dd={webSiteLink}
						/>,
						<DataDisplayRow
							key="price"
							isGrey={false}
							dt="Price(USD)"
							dd={coin.price}
						/>,
						<DataDisplayRow
							key="allTimeHigh"
							isGrey={true}
							dt={`All time high(USD)`}
							dd={coin.allTimeHigh.price}
						/>,
						<DataDisplayRow
							key="totalSupply"
							isGrey={false}
							dt={`Total Supply`}
							dd={coin.supply.total}
						/>,
						<DataDisplayRow
							key="marketCap"
							isGrey={true}
							dt="Market Cap"
							dd={marketCapBil()}
						/>,
						<DataDisplayRow
							key="chart"
							isGrey={false}
							lineChart={<LineChart color={color} sparkline={coin.sparkline} />}
						/>,
					]}
				/>
			) : (
				<LoadingSpinner />
			)}
		</section>
	);
};
