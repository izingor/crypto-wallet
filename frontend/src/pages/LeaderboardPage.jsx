import { LeaderboardList } from '../components/leaderboard/LeaderboardList'
import { useSelector, useDispatch } from 'react-redux'
import { userState, getMiniUsers } from '../store/modules/user.store'
import { useEffect } from 'react'
import { LoadingSpinner } from '../components/LoadingSpinner'

export const LeaderboardPage = () => {
	const {miniUsers} = useSelector(userState)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getMiniUsers())
	}, [])

	return (
		<div className='container flex flex-col min-h-fit items-center justify-center'>
			{miniUsers ? (
				<LeaderboardList miniUsers={miniUsers} />
			) : (
				<LoadingSpinner />
			)}
		</div>
	)
}
