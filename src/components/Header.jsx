// import { Component } from 'react'
import { NavLink } from 'react-router-dom'

export function Header() {
	// const { onUserMenu } = this.props;

	return (
		<section className='main-header'>
			<div className='container flex space-between'>
				<h1>Wallet</h1>
				<ul className='nav clean-list flex'>
					<NavLink exact to='/'>
						Home
					</NavLink>
					<NavLink to='/contacts'>Contacts</NavLink>
					<NavLink to='/rates'>Rates</NavLink>
					<NavLink to='/signup'>Signup</NavLink>
				</ul>
			</div>
		</section>
	)
}
