import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userState, logout } from '../store/modules/user.store'
import Logo from '../assets/images/logo_transparent.png'

export function Header() {
	const { user } = useSelector(userState)
	const dispacth = useDispatch()
	const history = useHistory()

	const logoutUser = () => {
		dispacth(logout())
		history.push('/login')
		console.log('loggin out')
	}

	const navTextClass =
		'hover:cursor-pointer hover:text-amber-200 active:text-amber-400'

	return (
		<section className='sticky top-0 w-full bg-blue-600 z-50'>
			<div className='container flex justify-between  items-center'>
				<img src={Logo} alt='' className='w-20 h-20 hover:transition-transform' />
				<nav className='flex justify-center space-x-4 text-white'>
					<NavLink exact to='/' className={navTextClass}>
						Home
					</NavLink>
					{user && <NavLink className={navTextClass} to='/wallet'>Wallet</NavLink>}
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
				</nav>
			</div>
		</section>
	)
}
