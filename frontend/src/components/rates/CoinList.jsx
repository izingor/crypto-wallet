import { CoinDataPreview } from './CoinDataPreview'

export const CoinList = ({ coins }) => {
	return (
		<div className='w-full  relative overflow-x-auto shadow-md sm:rounded-lg my-5 '>
			<table className='w-full text-sm text-left text-gray-500 '>
				<thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
					<tr>
						<th scope='col' className='px-6 py-3'>
							Symbol
						</th>
						<th scope='col' className='px-4 py-3'>
							Price (USD)
						</th>
						<th scope='col' className='px-4 py-3'>
							Change (%)
						</th>
						<th scope='col' className='px-4 py-3'></th>
					</tr>
				</thead>
				<tbody>
					{coins.map((coin) => (
						<CoinDataPreview
							key={coin.uuid}
							coin={coin}
						/>
					))}
				</tbody>
			</table>
		</div>
	)
}
