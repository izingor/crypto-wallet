// import failedAlert from '../../../assets/images/Alert.webp'
import { SmallBtn } from '../../buttons/SmallBtn'
import Lottie from 'lottie-react'
import failedProcess from '../../../assets/lottie-animations/fail.json'
export const FailedProcess = () => {
	return (
		<div className='flex flex-col justify-between items-center h-1/3 w-1/3'>
			<div className='w-20 h-20'>
				<Lottie animationData={failedProcess} />
			</div>
			<p>Action failed, try again later</p>
			<SmallBtn type='failed' txt='Back to dashboard' />
		</div>
	)
}
