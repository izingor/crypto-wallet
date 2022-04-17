import { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

function _Header() {
	// const { onUserMenu } = this.props;

	return (
		<section className="main-header">
			<div className="container flex space-between">
				<h1>Wallet</h1>
				<ul className="nav clean-list flex">
					{/* <li onClick={() => onUserMenu('user')}>Menu</li> */}
					{/* <li onClick={() => onUserMenu('contacts')}>Contacts</li> */}
					<NavLink to="/">Home</NavLink>
					<NavLink to="/contacts">Contacts</NavLink>
					<NavLink to="/rates">Rates</NavLink>
					{/* <li onClick={() => onUserMenu('rates')}>Rates</li> */}
				</ul>
			</div>
		</section>
	);
}

export const Header = withRouter(_Header);
