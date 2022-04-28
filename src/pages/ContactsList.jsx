import { Component } from 'react'
import { ContactPreview } from '../components/ContactPreview'
import { Filter } from '../components/Filter'
import { contactService } from '../services/contact.service'

export class ContactsList extends Component {
	state = {
		filterBy: null,
		contacts: null,
	}

	componentDidMount() {
		this.getContacts()
	}

	getContacts = async () => {
		const contacts = await contactService.getContacts(this.state.filterBy)
		this.setState({ contacts: contacts })
	}

	setFilter = async (filterBy) => {
		console.log('setting filter', filterBy)
		await this.setState({ filterBy })
		this.getContacts()
	}

	removeContact = async (id) => {
		const contacts = await contactService.deleteContact(id)
		this.setState({ contacts })
		// console.log('removing contact from contact list', id)
	}

	render() {
		const { contacts } = this.state
		return (
			<>
				<section className='container'>
					<Filter setFilter={this.setFilter} />
					<section className='contacts-list simple-cards-grid'>
						{contacts ? (
							contacts.map((contact) => (
								<ContactPreview
									removeContact={this.removeContact}
									contact={contact}
									key={contact._id}
								/>
							))
						) : (
							<h3>Loading</h3>
						)}
					</section>
				</section>
			</>
		)
	}
}