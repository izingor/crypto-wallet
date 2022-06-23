import { useHistory, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userState, logout } from '../../store/modules/user.store'
import { useState } from 'react'
import { UserBadge } from './UserBadge'
import { MobileMenuBtn } from './MobileMenuBtn'
import { HeaderNav } from './HeaderNav'
import { MobileMenu } from './MobileMenu'

export function Header() {
	const { user } = useSelector(userState)
	const [isUserMenu, setIsUserMenu] = useState(false)
	const [isMobileMenu, setIsMobileMenu] = useState(false)
	const dispacth = useDispatch()
	const history = useHistory()

	const logoutUser = () => {
		dispacth(logout())
		history.push('/login')
		console.log('loggin out')
	}

	const userBadgeClicked = () => {
		setIsUserMenu(!isUserMenu)
		console.log('something clicked')
	}

	const mobileMenuClicked = () => {
		setIsMobileMenu(!isMobileMenu)
		// console.log('mobile menu clicked')
	}

	return (
		<section className='sticky top-0 w-full bg-blue-600 z-50'>
			<nav className='bg-blue-600 container'>
				<div className='max-w-7xl mx-auto '>
					<div className='relative flex items-center justify-between h-16'>
						<MobileMenuBtn mobileMenuClicked={mobileMenuClicked} />
						<HeaderNav />
						{user ? (
							<UserBadge
								userId={user.uid}
								isUserMenu={isUserMenu}
								userBadgeClicked={userBadgeClicked}
							/>
						) : (
							<NavLink
								className='text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
								to='/login'
							>
								Sign in
							</NavLink>
						)}
					</div>
				</div>
				{isMobileMenu && <MobileMenu />}
			</nav>
		</section>
	)
}
