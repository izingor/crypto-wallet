import { useHandleChange } from '../hooks/useHandleChange';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin, user, validateUser } from '../store/user.store';
export function LoginPage() {
	const [userData, handleChange] = useHandleChange({ name: '', password: '' });
	const { name, password } = userData;

	const dispatch = useDispatch();

	const onLogin = async (ev) => {
		ev.preventDefault();
		await dispatch(validateUser(userData));
		console.log('logged in');
	};

	return (
		<section className="login-page container app-height flex auto-center column">
			<div className="flex column auto-center">
				<label>Please enter your name</label>
				<form className="flex column" onSubmit={onLogin}>
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
					<button>Login</button>
				</form>
			</div>
			<NavLink to="/signup">Sign up here</NavLink>
		</section>
	);
}
