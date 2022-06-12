import { useSelector, useDispatch } from 'react-redux';
import { user } from '../store/modules/user.store';
import { getWalletCoins, coinState } from '../store/modules/coin.store';
import { DataDisplayRow } from '../components/DataDisplayRow';
import { DataDisplayContainer } from '../components/DataDisplayContainer';
import { DoughnutChart } from '../components/DoughnutChart';
import { useEffect } from 'react';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const WalletPage = () => {
	const activeUser = useSelector(user);
	const { walletCoinValues } = useSelector(coinState);
	const dispatch = useDispatch();
	const coinLabels = activeUser && activeUser.coins.map((coin) => coin.symbol);

	const assetsValues =
		walletCoinValues &&
		activeUser.coins.map((coin) => coin.amount * walletCoinValues[coin.symbol]);

	const coinColors =
		activeUser && activeUser && activeUser.coins.map((coin) => coin.color);

	const walletValue = () => {
		return assetsValues.reduce((a, v) => a + v, 0);
	};

	useEffect(() => {
		dispatch(getWalletCoins(coinLabels));
	}, [activeUser]);

	console.log(activeUser);
	return (
		<div className="container">
			{activeUser && assetsValues ? (
				<DataDisplayContainer
					key="walletDispalyContainer"
					rows={[
						<DataDisplayRow key="userName" dt="Name" dd={activeUser.name} />,
						<DataDisplayRow
							key="userBalance"
							dt="Your Currents USD Balance:"
							dd={`$${activeUser.usdBalance}`}
							isGrey={true}
						/>,
						<DataDisplayRow
							key="walletValue"
							dt="Your Wallet Value:"
							dd={`$${assetsValues && walletValue()}`}
							isGrey={true}
						/>,
						<DataDisplayRow
							key="assetsAllocation"
							// dt={['kaka','kakd']}
							dougnnutChart={
								<DoughnutChart
									key="dougnnutChart"
									data={assetsValues}
									backgroundColor={coinColors}
									labels={coinLabels}
								/>
							}
						/>,
					]}
				/>
			) : (
				<LoadingSpinner />
			)}
			{/* {assetsValues ? (
						<DoughnutChart
						data={assetsValues}
						backgroundColor={coinColors}
					labels={coinLabels}
				/>
			) : (
				<LoadingSpinner />
			)} */}
		</div>
	);
};
