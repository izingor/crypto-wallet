import { useState } from 'react'
import { userService } from '../services/user.service'
import { sessionService } from '../services/session.service'
export function SignupPage(props) {
	const [user, setUser] = useState(null)

	const onSignup = async (ev) => {
		ev.preventDefault()
		const savedUser = await userService.saveNewUser(user)
		const loggedUser = await userService.login(savedUser)
		console.log('the user logged successfully', user)
		if (loggedUser) props.history.push('/')
	}

	const handleChange = async ({ target }) => {
		const value = target.value
		const field = target.name
		setUser(prevUser => ({...prevUser ,[field]: value }))
	}

	return (
		<section className='signup-page container app-height flex auto-center column'>
			<section className='flex column auto-center'>
				<label>Please enter your name</label>
				<form className='flex column' onSubmit={onSignup}>
					<input
						type='text'
						onChange={handleChange}
						name='name'
						placeholder='User name'
					/>
					<input
						type='text'
						onChange={handleChange}
						name='password'
						placeholder='Password'
					/>
					<button>Signup</button>
				</form>
			</section>
		</section>
	)
}
