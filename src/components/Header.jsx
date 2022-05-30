import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../store/user.store';
import { logout } from '../store/user.store';

export function Header() {
	const activeUser = useSelector(user);
	const dispacth = useDispatch();

	const logoutUser = () => {
		dispacth(logout());
		console.log('loggin out');
	};

	return (
		<section className="main-header">
			<div className="container flex space-between">
				<h1>Wallet</h1>
				<ul className="nav clean-list flex">
					<NavLink exact to="/">
						Home
					</NavLink>
					{/* <NavLink to='/contacts'>Contacts</NavLink> */}
					<NavLink to="/rates">Rates</NavLink>
					{activeUser ? (
						<a onClick={logoutUser}>Logout</a>
					) : (
						<NavLink to="/login">Login</NavLink>
					)}
				</ul>
			</div>
		</section>
	);
}
