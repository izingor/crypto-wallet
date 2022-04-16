import { Component } from 'react';

export function ContactPreview({ contact }) {
	// const { contacts } = this.props
	// console.log(contacts);
	const contactStyle = {
		backgroundImage: `url(https://robohash.org/${contact._id}`,
	};
	return (
		<section
			style={contactStyle}
			className="contact-preview flex column auto-center"
		>
			<div className="user-info">
				<p>{contact.name}</p>
				<p>{contact.email}</p>
				<p>{contact.phone}</p>
			</div>
		</section>
	);
}
