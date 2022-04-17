import React, { Component } from 'react';
import { contactService } from '../services/contact.service';

export class ContactDetails extends Component {
	state = {
		contact: null,
	};

	componentDidMount() {
		this.loadContact();
	}

	async loadContact() {
		const contact = await contactService.getContactById(
			this.props.match.params.id
		);
		this.setState({ contact });
	}

	render() {
		const { contact } = this.state;
		console.log(contact);
		return (
			<section className="contact-details container app-height">
				
				{contact && (
					<div className="info">
						<h3>{contact.name}</h3>
						<p>{contact.email}</p>
						<p>{contact.phone}</p>
					</div>
				)}
                {/* <button onClick={this.}>Remove</button> */}
			</section>
		);
	}
}
