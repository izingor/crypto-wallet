import { useEffect, useState } from 'react'
import { UserMenu } from '../components/UserMenu'
import { userService } from '../services/user.service'
import { useSelector, useDispatch } from 'react-redux'
import { userLogin } from '../store/user.store'
export function Home() {
	const [loggedUser, setLoggedUser] = useState(null)
	const dispatch = useDispatch()
	// const user = useSelector((state) => state.user)

	useEffect(() => {
		// dispatch(userLogin())
		// console.log(user)
		// const geLoggedtUser = async () => {
		// 	const loggedUser = await userService.getUser()
		// 	setLoggedUser(loggedUser)
		// }
		// geLoggedtUser()
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
