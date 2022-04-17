import { Component } from 'react';
import { UserMenu } from '../components/UserMenu';

import { userService } from '../services/user.service';

// import { Filter } from './Filter'

export class Home extends Component {
	state = {
		loggedUser: null,
	};

	async componentDidMount() {
		try {
			const loggedUser = await userService.getUser();
			this.setState({ loggedUser });
		} catch (err) {
			console.log('Had a problem while getting user', err.message);
		}
	}

	render() {
		const { loggedUser } = this.state;
		const { menuStatus } = this.props;

		return (
			<section className="container home-page">
				{loggedUser ? <UserMenu loggedUser={loggedUser} /> : <div>Press login</div>}
				{/* {loggedUser && menuStatus.rates ? <StatisticPage /> : ''} */}
			</section>
		);
	}
}
