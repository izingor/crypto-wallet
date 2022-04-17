import { Component } from 'react'

export class ContactPreview extends Component {


	onShowContact = (id) => {
		console.log('contact id is', id)
	}

	render() {
		const { contact } = this.props
		const contactStyle = {
			backgroundImage: `url(https://robohash.org/${contact._id}`}
			
		return (
			<section
				style={contactStyle}
				className='contact-preview flex column auto-center'
				onClick={() => this.onShowContact(contact._id)}
			>
				<div className='user-info'>
					<p>{contact.name}</p>
				
				</div>

				
			</section>
		)
	}
}
