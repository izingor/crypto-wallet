import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { user } from '../store/user.store';
export function Header() {
	const activeUser = useSelector(user);

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
					<NavLink to="/login">Login</NavLink>
				</ul>
			</div>
		</section>
	);
}
