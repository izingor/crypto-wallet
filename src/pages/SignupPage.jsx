import { useState } from 'react';
import { userService } from '../services/user.service';
import { useHandleChange } from '../hooks/useHandleChange';
import { sessionService } from '../services/session.service';
export function SignupPage(props) {
	
	const [userData, handleChange] = useHandleChange({
		name: '',
		password: '',
		passwordConformation: '',
	});
	const { name, password, passwordConformation } = userData;

	const onSignup = async (ev) => {
		ev.preventDefault();
		if (password !== passwordConformation) return;
		const savedUser = await userService.saveNewUser({ name, password });
		const loggedUser = await userService.login(savedUser);
		if (loggedUser) props.history.push('/');
	};

	return (
		<section className="signup-page container app-height flex auto-center column">
			<div className="flex column auto-center">
				<label>Please enter your name</label>
				<form className="flex column" onSubmit={onSignup}>
					<input
						type="text"
						onChange={handleChange}
						name="name"
						placeholder="User name"
						value={name}
					/>
					<input
						type="text"
						onChange={handleChange}
						name="password"
						placeholder="Password"
						value={password}
					/>
					<input
						type="text"
						onChange={handleChange}
						name="passwordConformation"
						placeholder="Password Confirmation"
						value={passwordConformation}
					/>
					<button>Signup</button>
				</form>
			</div>
		</section>
	);
}
