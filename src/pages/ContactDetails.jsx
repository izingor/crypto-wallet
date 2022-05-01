import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { contactService } from '../services/contact.service'

export function ContactDetails(props) {
	const [contact, setContact] = useState(null)

	const params = useParams()
	
	useEffect(() => {
		loadContact()
	},)

	const loadContact = async () => {
		const contact = await contactService.getContactById(params.id)
		setContact(contact)
	}
	
	const onBack = () => {
		props.history.push('/contacts')
	}

	return (
		<section className='contact-details container app-height'>
			{contact && (
				<div className='info'>
					<h3>{contact.name}</h3>
					<p>{contact.email}</p>
					<p>{contact.phone}</p>
				</div>
			)}
			<button onClick = {onBack}>Back</button>
		</section>
	)
}
