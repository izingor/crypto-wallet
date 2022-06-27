import React from 'react'
import { LeaderboardList } from '../components/leaderboard/LeaderboardList'
import { useSelector,useDispatch } from 'react-redux'
import { userState } from '../store/modules/user.store'
import { useEffect } from 'react';

export const LeaderboardPage = () => {
	const users = useSelector(userState)


    useEffect(() => {

    })

	return (
		<div className='container flex flex-col min-h-fit items-center'>
			<LeaderboardList />
		</div>
	)
}
