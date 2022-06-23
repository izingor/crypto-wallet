import { UserMenu } from './UserMenu'

export const UserBadge = ({ isUserMenu, userBadgeClicked }) => {
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
							className='h-8 w-8 rounded-full'
							src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
							alt=''
						/>
					</button>
				</div>
				<UserMenu isUserMenu={isUserMenu} />
			</div>
		</div>
	)
}
