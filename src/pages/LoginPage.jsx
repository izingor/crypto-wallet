import { useHandleChange } from '../hooks/useHandleChange';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/user.store';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function LoginPage() {
	const [userData, handleChange] = useHandleChange({ email: '', password: '' });
	const { email, password } = userData;
	const history = useHistory();
	const dispatch = useDispatch();

	const onLogin = async (ev) => {
		ev.preventDefault();
		try {
			const { payload } = await dispatch(loginUser(userData));
			payload && history.push('/');
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<section className="login-page container app-height flex auto-center column">
			<div className="flex column auto-center">
				<label>Please enter your name</label>
				<form className="flex column" onSubmit={onLogin}>
					<input
						type="email"
						onChange={handleChange}
						name="email"
						placeholder="Your Email"
						value={email}
						required
					/>
					<input
						type="password"
						onChange={handleChange}
						name="password"
						placeholder="Password"
						value={password}
						required
					/>
					<button>Login</button>
				</form>
			</div>
			<NavLink to="/signup">Sign up here</NavLink>
		</section>
	);
}
