import { UserMenu } from './UserMenu'
import { NavLink } from 'react-router-dom'

export const UserBadge = ({
	isUserMenu,
	userBadgeClicked,
	userId,
	logoutUser,
}) => {
	return (
		<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
			<div className='ml-3 relative'>
				<div>
					{userId ? (
						<button
							onClick={userBadgeClicked}
							type='button'
							className='bg-gray-100 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
							id='user-menu-button'
							aria-expanded='false'
							aria-haspopup='true'
						>
							<span className='sr-only'>Open user menu</span>
							<img
								className='h-10 w-10 rounded-full'
								src={`
                            https://robohash.org/${userId}`}
								alt=''
							/>
						</button>
					) : (
						<NavLink
							className='text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium border transition duration-150 ease-out hover:ease-in'
							to='/login'
						>
							Sign in
						</NavLink>
					)}
				</div>
				{isUserMenu && (
					<UserMenu
						logoutUser={logoutUser}
						userBadgeClicked={userBadgeClicked}
					/>
				)}
			</div>
		</div>
	)
}
