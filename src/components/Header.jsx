import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { user, logout } from '../store/modules/user.store'
import { onWalletModalChanged } from '../store/modules/ui.store'
import Logo from '../assets/images/logo_transparent.png'

export function Header() {
	const activeUser = useSelector(user)
	const dispacth = useDispatch()

	const logoutUser = () => {
		dispacth(logout())
		console.log('loggin out')
	}

	const navTextClass =
		'hover:cursor-pointer hover:text-amber-500 active:text-amber-800'

	return (
		<section className='sticky top-0 w-full bg-gray-600 z-50'>
			<div className='container flex justify-between py-3 items-center'>
				<img src={Logo} alt='' className='w-10 h-10' />
				<nav className='flex justify-center space-x-4 text-amber-200'>
					<NavLink exact to='/' className={navTextClass}>
						Home
					</NavLink>
					<p className={navTextClass}>Wallet</p>
					<NavLink to='/rates' className={navTextClass}>
						Rates
					</NavLink>
					<NavLink to='/news' className={navTextClass}>
						News
					</NavLink>
					{activeUser ? (
						<p onClick={logoutUser} className={navTextClass}>
							Logout
						</p>
					) : (
						<NavLink to='/login' className={navTextClass}>
							Login
						</NavLink>
					)}
				</nav>
			</div>
		</section>
	)
}
