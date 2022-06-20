import { WalletCoinPreview } from './WalletCoinPreview'

export const WalletCoinList = ({ assetsMap }) => {
	return (
		<div className='w-full relative overflow-x-auto  sm:rounded-lg'>
			<table className='w-full text-sm text-left text-gray-500 '>
				<thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
					<tr>
						<th scope='col' className='px-6 py-3'>
							Symbol
						</th>
						<th scope='col' className='px-6 py-3'>
							Amount
						</th>
						<th scope='col' className='px-6 py-3'>
							Value
						</th>
						{/* <th scope='col' className='px-6 py-3'></th> */}
					</tr>
				</thead>
				<tbody>
					{assetsMap.map((asset) => (
						<WalletCoinPreview key={asset.symbol} asset={asset} />
					))}
				</tbody>
			</table>
		</div>
	)
}
