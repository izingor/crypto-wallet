import { useEffect, useState } from 'react'
import { ContactPreview } from '../components/ContactPreview'
import { Filter } from '../components/Filter'
import { contactService } from '../services/contact.service'

export function ContactsList() {
	// state = {
	// 	filterBy: null,
	// 	contacts: null,
	// }

	const [filterBy, setFilterBy] = useState(null)
	const [contacts, setContacts] = useState(null)

	useEffect( () => {
		getContacts(filterBy)
	},[filterBy])

	const getContacts = async () => {
		const contacts = await contactService.getContacts(filterBy)
		setContacts(contacts)
	}

	const setFilter = (filter) => {
		setFilterBy(filter)
		getContacts()
	}

	const removeContact = async (id) => {
		const contacts = await contactService.deleteContact(id)
		setContacts(contacts)
		// console.log('removing contact from contact list', id)
	}

	// const { contacts } = this.state
	return (
		<>
			<section className='container'>
				<Filter setFilter={setFilter} />
				<section className='contacts-list simple-cards-grid'>
					{contacts ? (
						contacts.map((contact) => (
							<ContactPreview
								removeContact={removeContact}
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
