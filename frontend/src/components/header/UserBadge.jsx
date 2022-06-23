import { UserMenu } from './UserMenu'

export const UserBadge = ({ isUserMenu, userBadgeClicked, userId }) => {
	return (
		<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
			<div className='ml-3 relative' onClick={userBadgeClicked}>
				<div>
					<button
						type='button'
						className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
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
				</div>
				<UserMenu isUserMenu={isUserMenu} />
			</div>
		</div>
	)
}
