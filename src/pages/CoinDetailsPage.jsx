import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { coinState } from '../store/modules/coin.store'

export const CoinDetailsPage = () => {
	const { coins } = useSelector(coinState)
	const { coinName } = useParams()
	const coinInfo = coins.filter((coin) => coin[0] === coinName)
	console.log(coinInfo)
	return (<div>
		
	</div>)
}
