import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo_transparent.png'
export const HeaderNav = () => {
	return (
		<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
			<div className='flex-shrink-0 flex items-center'>
				<img className='block h-20  w-auto' src={logo} alt='Logo' />
			</div>
			<div className='hidden  sm:ml-6 sm:flex justify-center items-center '>
				<div className='flex space-x-4'>

				<NavLink
					exact
					to='/'
					className='text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
				>
					Home
				</NavLink>
				<NavLink
					to='/rates'
					className='text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
				>
					Coins
				</NavLink>
				<NavLink
					to='/news'
					className='text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
				>
					News
				</NavLink>
				<NavLink
					to='/ladder'
					className='text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
				>
					Leaderboard
				</NavLink>
				</div>
			</div>
		</div>
	)
}
