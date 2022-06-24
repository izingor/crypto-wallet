import { NavLink } from 'react-router-dom'

export const MobileMenu = ({ mobileMenuClicked }) => {
	return (
		<div className='sm:hidden' id='mobile-menu'>
			<div className='px-2 pt-2 pb-3 space-y-1'>
				{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
				<NavLink
					onClick={mobileMenuClicked}
					exact
					to='/'
					className='text-gray-100 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
					aria-current='page'
				>
					Home
				</NavLink>

				<NavLink
					onClick={mobileMenuClicked}
					to='/rates'
					className='text-gray-100 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
				>
					Rates
				</NavLink>

				<NavLink
					onClick={mobileMenuClicked}
					to='/news'
					className='text-gray-100 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
				>
					News
				</NavLink>

				<NavLink
					onClick={mobileMenuClicked}
					to='/ladder'
					className='text-gray-100 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
				>
					Leaderboard
				</NavLink>
			</div>
		</div>
	)
}

// <NavLink
// 					exact
// 					to='/'
// 					className='text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
// 				>
// 					Home
// 				</NavLink>
// 				<NavLink
// 					to='/rates'
// 					className='text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
// 				>
// 					Rates
// 				</NavLink>
// 				<NavLink
// 					to='/news'
// 					className='text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
// 				>
// 					News
// 				</NavLink>
// 				<NavLink
// 					to='/ladder'
// 					className='text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
// 				>
// 					Ladder
// 				</NavLink>
