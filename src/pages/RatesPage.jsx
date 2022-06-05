import { coinState, getCoins } from '../store/modules/coin.store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { CoinDataPreview } from '../components/CoinDataPreview'
import { LoadingSpinner } from '../components/LoadingSpinner'
export const RatesPage = () => {
	// const [tradeVolume, setTradeVolume] = useState(null);
	const { coins, status } = useSelector(coinState)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCoins())
	}, [])
	console.log(coins)

	return (
		<section className='container flex flex-col min-h-fit items-center'>
			{coins ? (
				<div className='relative overflow-x-auto shadow-md sm:rounded-lg my-5'>
					<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
						<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
							<tr>
								<th scope='col' className='px-6 py-3'>
									Coin name
								</th>
								<th scope='col' className='px-6 py-3'>
									Price (USD)
								</th>
								<th scope='col' className='px-6 py-3'>
									Day high
								</th>
								<th scope='col' className='px-6 py-3'>
									Day low
								</th>
								<th scope='col' className='px-6 py-3'>
									<span className='sr-only'>Buy</span>
								</th>
							</tr>
						</thead>
						<tbody>
							{coins.map((coin) => (
								<CoinDataPreview key={coin[0]} coin={coin} />
							))}
						</tbody>
					</table>
				</div>
			) : (
				<LoadingSpinner />
			)}
		</section>
	)
}

// 	<tr>
// 		<td>Coin</td>
// 		<td>Price(USD)</td>
// 		<td>High day</td>
// 		<td>Low day</td>
// 	</tr>
// </thead>
// <tbody>
