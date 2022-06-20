import { useHistory } from 'react-router'

export const WalletCoinPreview = ({ asset }) => {
	const { iconUrl, symbol, amount, coinsValue, uuid } = asset
	const history = useHistory()

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
			<td className='px-4 py-4'>{amount}</td>
			<td className='px-4 py-4'>{coinsValue}</td>
		</tr>
	)
}
