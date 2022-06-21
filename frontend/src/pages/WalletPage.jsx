import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { userState, sellCoins } from '../store/modules/user.store'
import { getWalletCoins, coinState } from '../store/modules/coin.store'
import { DataDisplayRow } from '../components/DataDisplayRow'
import { DataDisplayContainer } from '../components/DataDisplayContainer'
import { DoughnutChart } from '../components/charts/DoughnutChart'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { WalletChartCoinList } from '../components/wallet/WalletChartCoinList'
import { WalletCoinList } from '../components/wallet/WalletCoinList'
import { ActionsBar } from '../components/actions-bar/ActionsBar'
import { coinService } from '../services/coin.service'
import { SellModal } from '../components/modals/sell/SellModal'

export const WalletPage = () => {
	const [isSellOpen, setIsSellOpen] = useState(false)
	const { user } = useSelector(userState)
	const { walletCoinValues } = useSelector(coinState)
	const dispatch = useDispatch()

	const coinLabels = user && user.coins.map((coin) => coin.symbol)

	const assetsValues =
		walletCoinValues &&
		user.coins.map((coin) => coin.amount * walletCoinValues[coin.symbol])

	const coinColors = user && user.coins.map((coin) => coin.color)

	const walletValue = assetsValues && assetsValues.reduce((a, v) => a + v, 0)

	const assetsMap =
		walletCoinValues &&
		coinService.coinAssetsMap(user, walletCoinValues, walletValue)

	const onSellModalClicked = () => {
		setIsSellOpen(!isSellOpen)
		// console.log('sell modal clicked')
	}

	const onSellCoinsClicked = (sellData) => {
		// console.log('onSellClicked', sellData)
		dispatch(sellCoins(sellData))
	}

	useEffect(() => {
		user && dispatch(getWalletCoins(coinLabels))
	}, [user])

	return (
		<div className='container flex flex-col justify-center min-h-fit items-center'>
			{user && assetsValues ? (
				<DataDisplayContainer
					key='walletDispalyContainer'
					rows={[
						<DataDisplayRow
							key='ActionsBar'
							isGrey={true}
							actionsBar={
								<ActionsBar onSellModalClicked={onSellModalClicked} />
							}
						/>,
						<DataDisplayRow key='userName' dt='Name' dd={user.displayName} />,
						<DataDisplayRow
							key='userBalance'
							dt='Your Currents USD Balance:'
							dd={`$${user.usdBalance}`}
							isGrey={true}
						/>,
						<DataDisplayRow
							key='walletValue'
							dt='Your Wallet Value:'
							dd={`$${assetsValues && walletValue}`}
							isGrey={false}
						/>,
						<DataDisplayRow
							key='assetsAllocation'
							isGrey={true}
							dt={<WalletChartCoinList assetsMap={assetsMap} />}
							dougnnutChart={
								<DoughnutChart
									key='dougnnutChart'
									data={assetsValues}
									backgroundColor={coinColors}
									labels={coinLabels}
								/>
							}
						/>,
						<DataDisplayRow
							key='walletCoins'
							isGrey={false}
							table={<WalletCoinList assetsMap={assetsMap} />}
						/>,
					]}
				/>
			) : (
				<LoadingSpinner />
			)}
			{isSellOpen && (
				<SellModal
					user={user}
					walletCoinValues={walletCoinValues}
					onSellModalClicked={onSellModalClicked}
					onSellCoinsClicked={onSellCoinsClicked}
				/>
			)}
		</div>
	)
}
