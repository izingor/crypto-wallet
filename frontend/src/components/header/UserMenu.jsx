import {NavLink} from 'react-router-dom'

export const UserMenu = ({isUserMenu}) => {
	return (
		<div
			className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
			role='menu'
			aria-orientation='vertical'
			aria-labelledby='user-menu-button'
			tabIndex='-1'
			hidden={isUserMenu}
		>
			{/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
			<a
				href='#'
				className='block px-4 py-2 text-sm text-gray-700'
				role='menuitem'
				tabIndex='-1'
				id='user-menu-item-0'
			>
				Your Wallet
			</a>
			<a
				href='#'
				className='block px-4 py-2 text-sm text-gray-700'
				role='menuitem'
				tabIndex='-1'
				id='user-menu-item-2'
			>
				Sign out
			</a>
		</div>
	)
}
