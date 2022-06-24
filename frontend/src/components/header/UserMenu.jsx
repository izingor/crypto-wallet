import { NavLink } from 'react-router-dom'

export const UserMenu = ({ logoutUser, userBadgeClicked }) => {
	return (
		<div
			className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
			role='menu'
			aria-orientation='vertical'
			aria-labelledby='user-menu-button'
			tabIndex='-1'
		>
			<NavLink
				to='/wallet'
				className='block px-4 py-2 text-sm text-gray-700 hover:text-blue-600'
				role='menuitem'
				tabIndex='-1'
				id='user-menu-item-0'
				onClick={userBadgeClicked}
			>
				Wallet
			</NavLink>
			<NavLink
				to='/transactions'
				className='block px-4 py-2 text-sm text-gray-700 hover:text-blue-600'
				role='menuitem'
				tabIndex='-1'
				id='user-menu-item-1'
				onClick={userBadgeClicked}
			>
				Transactions
			</NavLink>
			<p
				onClick={logoutUser}
				className='block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer hover:text-blue-600'
				role='menuitem'
				tabIndex='-1'
				id='user-menu-item-2'
			>
				Sign out
			</p>
		</div>
	)
}
