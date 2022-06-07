import arrow from '../../assets/images/arrow.webp'

export const CurrencyInputs = () => {
	return (
		<div className='flex w-9/12 items-center '>
			<input
				type='search'
				id='default-search'
				class='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
				placeholder='Search Mockups, Logos...'
				required
			/>
			<img src={arrow} className = 'w-14 h-14'alt='' />
			<input
				type='search'
				id='default-search'
				class='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 '
				placeholder='USD'
				required
			/>
		</div>
	)
}
