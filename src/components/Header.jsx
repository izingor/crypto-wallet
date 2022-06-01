import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../store/modules/user.store';
import { logout } from '../store/modules/user.store';
import { newsService } from '../services/news.service'

export function Header() {
	const activeUser = useSelector(user);
	const dispacth = useDispatch();

	const logoutUser = () => {
		dispacth(logout());
		console.log('loggin out');
	};

	// const onNewsClicked = () => {
	// 	newsService.getCryptoNews()
	// }

	return (
		<section className="bg-emerald-400">
			<div className="container flex justify-between py-3 items-center">
				<h1 className = "text-3xl">Wallet</h1>
				<nav className="flex justify-center space-x-4">
					<NavLink exact to="/">
						Home
					</NavLink>
					{/* <NavLink to='/contacts'>Contacts</NavLink> */}
					<NavLink to="/rates">Rates</NavLink>
					{activeUser ? (
						<p onClick={logoutUser}>Logout</p>
					) : (
						<NavLink to="/login">Login</NavLink>
					)}
					{/* <p onClick = {onNewsClicked}>News</p> */}
				</nav>
			</div>
		</section>
	);
}
