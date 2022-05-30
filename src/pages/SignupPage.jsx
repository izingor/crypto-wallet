import { useHandleChange } from '../hooks/useHandleChange';
import { useDispatch } from 'react-redux';
import { signupUser, loginUser } from '../store/user.store';

export function SignupPage(props) {
	const dispatch = useDispatch();
	const [userData, handleChange] = useHandleChange({
		name: '',
		email: '',
		password: '',
		passwordConformation: '',
	});
	const { name, email, password, passwordConformation } = userData;

	const onSignup = async (ev) => {
		ev.preventDefault();
		if (password !== passwordConformation) return;
		try {
			await dispatch(signupUser({ name, password, email }));
			const { payload } = await dispatch(loginUser({ name, password, email }));
			console.log(payload);
			payload ? props.history.push('/') : alert('Failed to sign up');
		} catch (err) {
			console.log(err.message);
		}
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
						required
					/>
					<input
						type="mail"
						onChange={handleChange}
						name="email"
						placeholder="Email"
						value={email}
						required
					/>
					<input
						type="text"
						onChange={handleChange}
						name="password"
						placeholder="Password"
						value={password}
						required
					/>
					<input
						type="text"
						onChange={handleChange}
						name="passwordConformation"
						placeholder="Password Confirmation"
						value={passwordConformation}
						required
					/>
					<button>Signup</button>
				</form>
			</div>
		</section>
	);
}
