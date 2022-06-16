import { coinState, getCoins } from '../store/modules/coin.store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { CoinDataPreview } from '../components/CoinDataPreview'
import { LoadingSpinner } from '../components/LoadingSpinner'

export const RatesPage = () => {
	const { coins } = useSelector(coinState)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCoins())
	}, [])

	return (
		<section className=' container flex flex-col min-h-fit items-center'>
			{coins ? (
				<div className='w-full relative overflow-x-auto shadow-md  my-5'>
					<table className='w-full text-sm text-left text-gray-500 '>
						<thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
							<tr>
								<th scope='col' className='px-5 py-3'>
									Symbol
								</th>
								<th scope='col' className='px-4 py-3'>
									Price (USD)
								</th>
								<th scope='col' className='px-4 py-3'>
									Change (%){' '}
								</th>
								<th scope='col' className=' px-4 py-3'>
									Last 24H
								</th>
							</tr>
						</thead>
						<tbody>
							{coins.map((coin) => (
								<CoinDataPreview key={coin.uuid} coin={coin} />
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
