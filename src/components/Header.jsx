import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { user } from '../store/modules/user.store'
import { logout } from '../store/modules/user.store'
import { newsService } from '../services/news.service'

export function Header() {
	const activeUser = useSelector(user)
	const dispacth = useDispatch()

	const logoutUser = () => {
		dispacth(logout())
		console.log('loggin out')
	}

	const onDarkModeClicked = () => {
		console.log('onDarkModeClicked')
	}
	
	const navTextClass =
		'hover:cursor-pointer hover:text-amber-500 active:text-amber-800'

	return (
		<section className='bg-indigo-600 '>
			<div className='container flex justify-between py-3 items-center'>
				<h1 className='text-3xl'>Wallet</h1>
				<nav className='flex justify-center space-x-4 text-amber-200'>
					<NavLink exact to='/' className={navTextClass}>
						Home
					</NavLink>
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
				<button onClick={onDarkModeClicked}>Change to dark mode</button>
			</div>
		</section>
	)
}
