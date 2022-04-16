import { Component } from 'react';
import { UserMenu } from './UserMenu';
import { ContactsList } from './ContactsList';
import { userService } from '../services/user.service';
import { contactService } from '../services/contact.service';
import { StatisticPage } from './StatisticPage';

export class Home extends Component {
	state = {
		loggedUser: null,
		contacts: null,
	};

	async componentDidMount() {
		try {
			const loggedUser = await userService.getUser();
			const contacts = await contactService.getContacts();	
			this.setState({ loggedUser, contacts});
			
		} catch (err) {
			console.log('Had a problem while getting user', err.message);
		}
	}

	render() {
		const { loggedUser, contacts } = this.state;
		const { menuStatus } = this.props;

		return (
			<section className="container home-page">
				{loggedUser && menuStatus.user ? (
					<UserMenu loggedUser={loggedUser} />
				) : (
					''
				)}
				{loggedUser && menuStatus.contacts ? (
					<ContactsList contacts={contacts} />
				) : (
					''
				)}
				{loggedUser && menuStatus.rates ? <StatisticPage /> : ''}
			</section>
		);
	}
}
