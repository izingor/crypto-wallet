import { Component } from 'react'
import { UserMenu } from './UserMenu'
import { ContactsList } from './ContactsList'
import { userService } from '../services/user.service'
import { StatisticPage } from './StatisticPage'
// import { Filter } from './Filter'

export class Home extends Component {
	state = {
		loggedUser: null,
		
	}

	async componentDidMount() {
		try {
			const loggedUser = await userService.getUser()
			this.setState({ loggedUser })
		} catch (err) {
			console.log('Had a problem while getting user', err.message)
		}
	}

	render() {
		const { loggedUser, contacts } = this.state
		const { menuStatus } = this.props

		return (
			<section className='container home-page'>
				{/* <Filter /> */}
				{loggedUser && menuStatus.user ? (
					<UserMenu loggedUser={loggedUser} />
				) : (
					''
				)}
				{loggedUser && menuStatus.contacts ? (
					<ContactsList contacts={contacts} />
				) : (
					''
				)}
				{loggedUser && menuStatus.rates ? <StatisticPage /> : ''}
			</section>
		)
	}
}
