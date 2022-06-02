import { useHandleChange } from '../hooks/useHandleChange';
import { useDispatch } from 'react-redux';
import { signupUser, loginUser } from '../store/modules/user.store';
import { SimpleInput } from '../components/SimpleInput';
import { SubmitBtn } from '../components/SubmitBtn';
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
			payload ? props.history.push('/') : alert('Failed to sign up');
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<section className="container flex justify-center items-center">
			<div className="max-w-md w-full space-y-8">
				<h5 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
					Sign Up
				</h5>
				<form className="flex flex-col" onSubmit={onSignup}>
					<SimpleInput
						handleChange={handleChange}
						inputType="name"
						valueType={name}
						placeholderText="Your name"
					/>
					<SimpleInput
						handleChange={handleChange}
						inputType="email"
						valueType={email}
						placeholderText="Email address"
					/>
					<SimpleInput
						handleChange={handleChange}
						inputType="password"
						valueType={password}
						placeholderText="Password"
					/>
					<SimpleInput
						handleChange={handleChange}
						inputType="passwordConformation"
						valueType={passwordConformation}
						placeholderText="Password confirmation"
					/>
					<SubmitBtn btnText = "Sign up"/>
				</form>
			</div>
		</section>
	);
}
