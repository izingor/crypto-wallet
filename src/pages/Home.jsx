import { useEffect, useState } from 'react'
import { UserMenu } from '../components/UserMenu'
import { userService } from '../services/user.service'
import { useSelector, useDispatch } from 'react-redux'
import { userLogin } from '../store/user.store'
export function Home() {
	const [loggedUser, setLoggedUser] = useState(null)
	const dispatch = useDispatch()

	useEffect(() => {
	
	}, [])

	return (
		<section className='container home-page'>
			{loggedUser ? (
				<UserMenu loggedUser={loggedUser} />
			) : (
				<div>Press login</div>
			)}
			<button>Click</button>
		</section>
	)
}
