<<<<<<< HEAD
import { Component } from 'react';

export class Header extends Component {
	render() {
		return (
			<section className="main-header">
				<div className="container">I am the header</div>
			</section>
		);
	}
}
=======
import { Component } from 'react'

export class Header extends Component {
	render() {
		const { onUserMenu } = this.props
		return (
			<section className='main-header'>
				<div className='container flex space-between'>
					<h1>Wallet</h1>
				<ul className='nav clean-list flex'>
					<li onClick={() => onUserMenu('user')}>Menu</li>
					<li onClick={() => onUserMenu('contacts')}>Contacts</li>
					<li onClick={() => onUserMenu('rates')}>Rates</li>
				</ul>

				</div>

			</section>
		)
	}
}
>>>>>>> f6d66b7863c03740ccad012a5dc2684109d2e624
