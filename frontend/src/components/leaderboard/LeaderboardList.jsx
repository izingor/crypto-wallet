import { LeaderDataPreview } from './LeaderDataPreview'

export const LeaderboardList = () => {
	return (
		<div className='w-full  relative overflow-x-auto shadow-md sm:rounded-lg my-5 '>
			<table className='w-full text-sm text-left text-gray-500 '>
				<thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
					<tr>
						<th scope='col' className='px-6 py-3'>
							Name
						</th>
						<th scope='col' className='px-4 py-3'>
							Wallet Value
						</th>
						<th scope='col' className='px-4 py-3'>
							Created Date
						</th>
						<th scope='col' className='px-4 py-3'></th>
					</tr>
				</thead>
				<tbody>
					<LeaderDataPreview />
				</tbody>
			</table>
		</div>
	)
}
