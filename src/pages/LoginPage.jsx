import { useHandleChange } from '../hooks/useHandleChange';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/modules/user.store';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { SimpleInput } from '../components/SimpleInput';
import { SubmitBtn } from '../components/SubmitBtn';

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
		<section className="container flex justify-center items-center">
			<div className="max-w-md w-full space-y-8">
				<h5 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
					Sign in to your account
				</h5>
				<p className="mt-2 text-center text-sm text-gray-600">
					Or
					<NavLink
						to="/signup"
						className="font-medium text-indigo-600 hover:text-indigo-500"
					>
						{' '}
						Sign up here
					</NavLink>
				</p>
				<form className="flex flex-col" onSubmit={onLogin}>
					<SimpleInput
						handleChange={handleChange}
						inputType="email"
						valueType={email}
						placeholderText = "Email Address"
					/>

					<SimpleInput
						handleChange={handleChange}
						inputType="password"
						valueType={password}
						placeholderText = "Password"
					/>
					<SubmitBtn btnText = "Sign in"/>
				</form>
			</div>
		</section>
	);
}
