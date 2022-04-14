// import { userService } from '../services/user.service'
import { Component } from 'react'

export class UserMenu extends Component {
	render() {
		const { name, coins, moves } = this.props.loggedUser

		return (
			<>
				<section className='crypto-app container'>
					{name ? (
						<div className='user-info'>
							<p>{name}</p>
							<p>{coins}</p>
							<p>{moves.length}</p>
						</div>
					) : (
						''
					)}
				</section>
			</>
		)
	}
}
