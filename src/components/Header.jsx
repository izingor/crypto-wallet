import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { user,userLogin } from '../store/user.store'
export function Header() {
	const loggedUser = useSelector(user)
	const dispatch = useDispatch()
	return (
		<section className='main-header'>
			<div className='container flex space-between'>
				<p>{loggedUser}</p>
				<button onClick={() => dispatch(userLogin())}>click</button>
				<h1>Wallet</h1>
				<ul className='nav clean-list flex'>
					<NavLink exact to='/'>
						Home
					</NavLink>
					{/* <NavLink to='/contacts'>Contacts</NavLink> */}
					<NavLink to='/rates'>Rates</NavLink>
					<NavLink to='/signup'>Signup</NavLink>
				</ul>
			</div>
		</section>
	)
}
