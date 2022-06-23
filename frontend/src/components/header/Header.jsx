import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userState, logout } from '../../store/modules/user.store'
import Logo from '../../assets/images/logo_transparent.png'
import { useState } from 'react'
import { UserMenu } from './UserMenu'
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
			{/* <div className='container flex justify-between  items-center'>
				<img
					src={Logo}
					alt=''
					className='w-20 h-20 hover:transition-transform'
				/>
				<nav className='flex justify-center space-x-4 text-white items-center'>
					<NavLink exact to='/' className={navTextClass}>
						Home
					</NavLink>
					{user && (
						<NavLink className={navTextClass} to='/wallet'>
							Wallet
						</NavLink>
					)}
					<NavLink to='/rates' className={navTextClass}>
						Rates
					</NavLink>
					<NavLink to='/news' className={navTextClass}>
						News
					</NavLink>
					{user ? (
						<p onClick={logoutUser} className={navTextClass}>
							Logout
						</p>
					) : (
						<NavLink to='/login' className={navTextClass}>
							Login
						</NavLink>
					)}
					<div className='relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
						<svg
							className='absolute w-12 h-12 text-gray-400 -left-1'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
								clipRule='evenodd'
							></path>
						</svg>
					</div>
				</nav>
			</div> */}
			<nav className='bg-blue-600 container'>
				<div className='max-w-7xl mx-auto '>
					<div className='relative flex items-center justify-between h-16'>
						<MobileMenuBtn mobileMenuClicked={mobileMenuClicked} />
						<HeaderNav />
						<UserBadge
							isUserMenu={isUserMenu}
							userBadgeClicked={userBadgeClicked}
						/>
					</div>
				</div>
				{isMobileMenu && <MobileMenu />}
			</nav>
		</section>
	)
}
