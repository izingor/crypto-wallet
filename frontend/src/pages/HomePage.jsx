import Lottie from 'lottie-react'
import homepageAnimation from '../assets/lottie-animations/homepage.json'
import homepageBackground from '../assets/images/homepage-background.jpeg'

export function HomePage() {
	return (
		<section className='container grid grid-cols-6 grid-rows-4 gap-4'>
			<div className='col-start-1 col-end-7 row-start-1 row-end-2 flex items-center justify-center'>
				<h1>Welcome to CrypSim</h1>
			</div>
			<div className='col-start-1 col-end-7 row-start-2 row-end-3 flex items-center justify-center'>
				<h3>Sign up and start your crypto simulation</h3>
			</div>
			{/* <h5>Begin your Simulation</h5> */}
			<div className='col-start-4 col-end-6 row-start-2 row-end-4'>
				<Lottie animationData={homepageAnimation} loop={true} />
			</div>
		</section>
	)
}
