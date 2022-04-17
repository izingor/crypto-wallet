import { Component } from 'react'
import { Link } from 'react-router-dom'
import { contactService } from '../services/contact.service'
export class ContactPreview extends Component {
	onRemove = async (id) => {
		const { removeContact } = this.props
		removeContact(id)
	}

	render() {
		const { contact } = this.props
		const contactStyle = {
			backgroundImage: `url(https://robohash.org/${contact._id}`,
		}

		return (
			<section
				style={contactStyle}
				className='contact-preview flex column'
			>
				<Link to={`/contact/${contact._id}`}>
					<div className='user-info'>
						<p>{contact.name}</p>
					</div>
				</Link>
				<button onClick={() => this.onRemove(contact._id)}>Remove</button>
			</section>
		)
	}
}
