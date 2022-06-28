
export const LeaderDataPreview = ({user}) => {
	return (
		<tr className='bg-white border-b  hover:bg-gray-50 hover:cursor-pointer'>
			<th
				scope='row'
				className='px-4 py-4 font-medium text-gray-900  whitespace-nowrap flex'
			>
				<img src={`https://robohash.org/${user.uid}`} alt='' className='w-10 h-10 self-center mr-2' />
			</th>
			<td className='px-4 py-4'>{user.name}</td>
			<td className='px-4 py-4'>${user.walletValue.toFixed(3)}</td>
			<td className='px-0 py-4'>
				<div className='mr-3 flex items-center justify-start'></div>
			</td>
		</tr>
	)
}
