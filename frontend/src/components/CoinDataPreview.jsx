import { LineChart } from './charts/LineChart'
import { useHistory } from 'react-router'
import { utilsService } from '../services/utils.service'
export const CoinDataPreview = ({ coin }) => {
	const { symbol, price, iconUrl, uuid, change, sparkline } = coin
	const history = useHistory()

	const priceFixed = parseFloat(price).toFixed(6)
	const parsedChange = parseFloat(change).toFixed(2)
	const changePrefix = parsedChange > 0 ? '+' : ''

	// const processedChange = () => {
	// 	return parsedChange > 0 ? '+' : ''
	// }

	const color = (change, isString) => {
		return utilsService.changeColor(change, isString)
	}

	return (
		<tr
			className='bg-white border-b  hover:bg-gray-50 hover:cursor-pointer'
			onClick={() => history.push(`coins/${uuid}`)}
		>
			<th
				scope='row'
				className='px-5 py-4 font-medium text-gray-900  whitespace-nowrap flex'
			>
				<img src={iconUrl} alt='' className='w-5 h-5 self-center mr-2' />
				{symbol}
			</th>
			<td className='px-4 py-4'>{priceFixed}</td>
			<td className='px-4 py-4' style={color(change, false)}>
				{changePrefix + change}
			</td>
			<td className='px-2 py-4 text-left'>
				<div className='flex items-center justify-start'>
					<LineChart
						color={color(change, true)}
						sparkline={sparkline}
						isTicksAndBorders={false}
					/>
				</div>
			</td>
		</tr>
	)
}
