import Lottie from 'lottie-react'
import homepageAnimation from '../assets/lottie-animations/homepage.json'
import { NavLink } from 'react-router-dom'
import { userState } from '../store/modules/user.store'
import { useSelector } from 'react-redux'

export function HomePage() {
	const { user } = useSelector(userState)

	return (
		// <div
		// 	style={{ backgroundImage: `url(${homeHeroImage})` }}
		// 	className='w-full h-full bg-no-repeat bg-cover'
		// >
		<div className='w-full h-full container grid grid-cols-6 grid-rows-4 sm:grid-rows-6 gap-4 font-mono'>
			<div className='col-start-2 col-end-7 row-start-1 row-end-2 flex flex-col items-start justify-center '>
				{!user ? (
					<>
						<h1 className='font-bold text-3xl mb-2 text-sky-600'>
							Welcome to CrypSim!
						</h1>
						<h3 className='mb-4'>Cryptocurrency wallet simulator</h3>
						<h4 className='leading-10'>
							<NavLink
								to='/login'
								className='text-white hover:bg-blue-700  py-3 px-4 mr-2 rounded bg-blue-600'
							>
								Sign up
							</NavLink>
							and start trading now!
						</h4>
					</>
				) : (
					<h1
					className='font-bold text-3xl mb-2 text-sky-600'
					>Hello {user.displayName}</h1>
				)}
			</div>
			<div className='col-start-1 col-end-7 row-start-2 row-end-5  sm:col-start-2 sm:col-end-6 sm:row-start-2 sm:row-end-7 flex flex-col items-start justify-center'>
				<Lottie animationData={homepageAnimation} loop={true} />
			</div>
		</div>
		// </div>
	)
}
