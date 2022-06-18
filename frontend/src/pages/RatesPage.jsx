import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { coinState, getCoins } from '../store/modules/coin.store'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { CoinList } from '../components/rates/CoinList'

export const RatesPage = () => {
	const { coins } = useSelector(coinState)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCoins())
	}, [])

	return (
		<section className=' container flex flex-col min-h-fit items-center'>
			{coins ? <CoinList coins={coins} /> : <LoadingSpinner />}
		</section>
	)
}
