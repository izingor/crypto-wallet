import { Component } from 'react';
import { userService } from '../services/user.service';
// import contactService from '../services/contact.service';
// import robotService from '../services/robot.service';

export class Home extends Component {
	state = {
		loggedUser: null,
	};

	componentDidMount() {
		this.setState({ loggedUser: userService.getUser() });
        console.log(this.state.loggedUser);
	}

	render() {
		return (
			<section className="container">
				<h1>Hello Moshe</h1>
				{/* <p>{this.state.loggedUser}</p> */}
			</section>
		);
	}
}
