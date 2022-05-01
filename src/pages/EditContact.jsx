import { useEffect } from 'react'
import { useState } from 'react'
import { Component } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { contactService } from '../services/contact.service'

export function EditContact(props) {
	const [contact, setContact] = useState(null)
	const params = useParams()

	const getContact = async () => {
		const contact = await contactService.getContactById(params.id)
		setContact(contact)
	}

	useEffect(() => {
		getContact()
		console.log(props);
	})

	const contactStyle = {
		backgroundImage: `url(https://robohash.org/${params.id}`
	}

	return (
		contact && (
			<section style = {contactStyle} className='edit-contact container'>{contact.name}</section>
			// <img src="" alt="" />
		)
	)
}
