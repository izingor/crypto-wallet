import React from 'react'

export const MobileMenuBtn = ({ mobileMenuClicked }) => {
	return (
		<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
			<button
				onClick={mobileMenuClicked}
				type='button'
				className='inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
				aria-controls='mobile-menu'
				aria-expanded='false'
			>
				<span className='sr-only'>Open main menu</span>

				<svg
					className='block h-6 w-6'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strikewidth='2'
					stroke='currentColor'
					aria-hidden='true'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M4 6h16M4 12h16M4 18h16'
					/>
				</svg>

				<svg
					className='hidden h-6 w-6'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strikewidth='2'
					stroke='currentColor'
					aria-hidden='true'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</button>
		</div>
	)
}
