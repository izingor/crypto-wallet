import { Component } from 'react'

export function ContactPreview({ contact }) {
	// const { contacts } = this.props
        // console.log(contacts);
	return <section className='contact-preview flex column auto-center'>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
    </section>
}
