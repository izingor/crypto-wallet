import { Component } from 'react';
import { contactService } from '../services/contact.service';

export class EditContact extends Component {
	state = {
		contact: null,
	};
	async componentDidMount() {
		const contact = await contactService.getContactById(
			this.props.match.params.id
		);
		this.setState({ contact });
	}

	render() {
		// const contactId = this.props.match.params.id;
		const { contact } = this.state;

		console.log(this.state.contact);
		return (
			contact && (
				<section className="edit-contact container">{contact.name}</section>
			)
		);
	}
}
