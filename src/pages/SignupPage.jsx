import { Component } from 'react';
import { userService } from '../services/user.service';
import { sessionService } from '../services/session.service';
export class SignupPage extends Component {
	state = {
		user: null,
	};

	componentDidMount() {
		this.state.user = userService.getEmptyUser();
	}

	onSignup = async (ev) => {
		ev.preventDefault();
		const user = await userService.saveNewUser(this.state.user);
        const loggedUser = await userService.login(user)
        if(loggedUser) this.props.history.push('/')
        // console.log('the user logged successfully', user);
	};

	handleChange = async ({ target }) => {
		const value = target.value;
		const field = target.name;
		await this.setState((prevState) => ({
			user: { ...prevState.user, [field]: value },
		}));
	};

	render() {
		return (
			<section className="signup-page container app-height flex auto-center column">
				<section className="flex column auto-center">
					<label>Please enter your name</label>
					<form className="flex column" onSubmit={this.onSignup}>
						<input
							type="text"
							onChange={this.handleChange}
							name="name"
							placeholder="User name"
						/>
						<input
							type="text"
							onChange={this.handleChange}
							name="password"
							placeholder="Password"
						/>
						<button>Signup</button>
					</form>
				</section>
			</section>
		);
	}
}
