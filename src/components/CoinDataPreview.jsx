import { Link } from 'react-router-dom'

export const CoinDataPreview = ({ coin }) => {
	const { PRICE, LOWDAY, HIGHDAY } = coin[1].USD
	return (
		<tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
			<th
				scope='row'
				className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
			>
				{coin[0]}
			</th>
			<td className='px-6 py-4'>{PRICE}</td>
			<td className='px-6 py-4'>{LOWDAY}</td>
			<td className='px-6 py-4'>{HIGHDAY}</td>
			<td className='px-6 py-4 text-right'>
				<a
					href='#'
					className='font-medium text-yellow-300 dark:text-yellow-500 hover:underline'
				>
					Buy
				</a>
			</td>
			<td>
				<Link
					to={`/coins/${coin[0]}`}
					className='font-medium text-yellow-300 dark:text-yellow-500 hover:underline'
				>
					Info
				</Link>
			</td>
		</tr>
	)
}

