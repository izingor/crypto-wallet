import { useEffect, useState } from 'react'
import { UserMenu } from '../components/UserMenu'
import { userService } from '../services/user.service'

export function Home() {
	const [loggedUser, setLoggedUser] = useState(null)

	useEffect(() => {
		const geLoggedtUser = async () => {
			const loggedUser = await userService.getUser()
			setLoggedUser(loggedUser)
		}
		geLoggedtUser()
	}, [])

	return (
		<section className='container home-page'>
			{loggedUser ? (
				<UserMenu loggedUser={loggedUser} />
			) : (
				<div>Press login</div>
			)}
		</section>
	)
}
