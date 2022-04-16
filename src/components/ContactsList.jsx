import { Component } from 'react'
import { ContactPreview } from './ContactPreview'

export class ContactsList extends Component {
	render() {
		const { contacts } = this.props
		return (
			<>
				<section className='contacts-list simple-cards-grid'>
					{contacts.map((contact) => (
						<ContactPreview contact={contact} key={contact._id} />
					))}
				</section>
			</>
		)
	}
}
