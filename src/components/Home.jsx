import { Component } from 'react'
import { UserMenu } from './UserMenu'
import { ContactsList } from './ContactsList'
import { userService } from '../services/user.service'
import { contactService } from '../services/contact.service'

export class Home extends Component {
	state = {
		loggedUser: null,
		contacts: null,
	}

	async componentDidMount() {
		try {
			const loggedUser = await userService.getUser()
			const contacts = await contactService.getContacts()
			await this.setState({ loggedUser, contacts })
			console.log(this.state)
		} catch (err) {
			console.log('Had a problem while getting user', err.message)
		}
	}
	render() {
		const { loggedUser, contacts } = this.state
		const { menuStatus } = this.props

		return (
			<section className='container home-page'>
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
			</section>
		)
	}
}
