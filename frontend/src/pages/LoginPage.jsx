import { useHandleChange } from '../hooks/useHandleChange'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../store/modules/user.store'
import { LargeInput } from '../components/inputs/LargeInput'
import { LargeBtn } from '../components/buttons/LargeBtn'
import { GoogleSignInBtn } from '../components/buttons/GoogleSignInBtn'

export function LoginPage() {
	// const [userData, handleChange] = useHandleChange({ email: '', password: '' })
	// const { email, password } = userData
	const dispatch = useDispatch()
	const history = useHistory()

	const onLogin = async () => {
		// const res = await signInWithPopup(auth, provider)
		// console.log('logging in', res)
		// ev.preventDefault()
		// try {
		console.log('logging')
		await dispatch(loginUser())
		history.push('/home')
		// payload && history.push('/')
		// } catch (err) {
		// 	console.log(err.message)
		// }
	}

	return (
		<section className='container flex justify-center items-center'>
			<div className='max-w-md w-full space-y-8 flex flex-col items-center border rounded p-10'>
				<p className=' text-center text-xl font-extrabold text-gray-700'>
					Sign in to your account
				</p>
				{/* <p className='mt-2 text-center text-sm text-gray-600'>
					Or
					<NavLink
						to='/signup'
						className='font-medium text-indigo-600 hover:text-indigo-500'
					>
						{' '}
						Sign up here
					</NavLink>
				</p>
				<form className='flex flex-col' onSubmit={onLogin}>
					<LargeInput
						handleChange={handleChange}
						inputType='email'
						valueType={email}
						placeholderText='Email Address'
					/>

					<LargeInput
						handleChange={handleChange}
						inputType='password'
						valueType={password}
						placeholderText='Password'
					/> */}
				{/* <LargeBtn clicked={onLogin} btnText='Sign in With Google' /> */}
				<GoogleSignInBtn handleClick={onLogin} />
			</div>
		</section>
	)
}
