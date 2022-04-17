import { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

export class Header extends Component {
	render() {
		// const { onUserMenu } = this.props;
		
		return (
			<section className="main-header">
				<div className="container flex space-between">
					<h1>Wallet</h1>
					<ul className="nav clean-list flex">
						{/* <li onClick={() => onUserMenu('user')}>Menu</li> */}
						{/* <li onClick={() => onUserMenu('contacts')}>Contacts</li> */}
						<NavLink to = '/'>Home</NavLink>
						<NavLink to = '/contacts'>Contacts</NavLink>
						<NavLink to = '/rates'>Rates</NavLink>
						{/* <li onClick={() => onUserMenu('rates')}>Rates</li> */}
					</ul>
				</div>
			</section>
		);
	}
}
