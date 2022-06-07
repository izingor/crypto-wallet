import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { coinState, getCoin } from '../store/modules/coin.store'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { CoinDetailsTableRow } from '../components/CoinDetailsTableRow'
import { CoinChart } from '../components/CoinChart'

export const CoinDetailsPage = () => {
	const { coinId } = useParams()
	const { coin } = useSelector(coinState)
	const dispatch = useDispatch()
	const marketCapBil = () => {
		return (coin.marketCap / 10e8).toFixed(2) + ' Billion'
	}
	useEffect(() => {
		dispatch(getCoin(coinId))
	}, [])

	return (
		<section className='container items-center justify-center py-8'>
			{coin ? (
				<div className='bg-white shadow overflow-hidden sm:rounded-lg'>
					<div className='px-4 py-5 sm:px-6 flex items-center justify-center'>
					
						{/* <button type="button" class="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Yellow</button> */}
						{/* <button type="button" class="text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-12  py-2.5 text-center mr-2 mb-2">Buy</button> */}

					</div>
					<div className='border-t border-gray-200'>
						<dl>
							<CoinDetailsTableRow isGrey={true} dt='Name' dd={coin.name} />
							<CoinDetailsTableRow
								isGrey={false}
								dt='Symbol'
								dd={<img src={coin.iconUrl} alt='' className='w-8 h-8' />}
							/>
							<CoinDetailsTableRow
								isGrey={true}
								dt='Website'
								dd={
									<a
										href={coin.websiteUrl}
										className='mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2'
									>
										{coin.websiteUrl}
									</a>
								}
							/>
							<CoinDetailsTableRow
								isGrey={false}
								dt='Price(USD)'
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
								isGrey={false}
								dt='Market Cap'
								dd={marketCapBil()}
							/>
							<CoinDetailsTableRow
								isGrey={true}
								dt='Chart'
								dd={<CoinChart sparkline={coin.sparkline} />}
							/>
						</dl>
					</div>
				</div>
			) : (
				<LoadingSpinner />
			)}
		</section>
	)
}
