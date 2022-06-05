export const CoinDataPreview = ({ coin }) => {
	const { PRICE, LOWDAY, HIGHDAY } = coin[1].USD
	console.log(coin)
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
					className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
				>
					Buy
				</a>
			</td>
		</tr>
	)
}

{
	/* <td>{coin[0]}</td>
<td>{PRICE}</td>
<td>{LOWDAY}</td>
<td>{HIGHDAY}</td> */
}
