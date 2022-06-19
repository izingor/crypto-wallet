import success from '../../../assets/lottie-animations/success.json'
import { SmallBtn } from '../../buttons/SmallBtn'
import Lottie from 'lottie-react'
export const SuccessMsg = ({ closeModal }) => {
	return (
		<div className='flex flex-col space-between items-center'>
			{/* <img className='w-10 h-10' src={success} alt='' />
			 */}
             <div className = "w-16 h-16">
			<Lottie animationData={success} />
             </div>

			<p>Success!</p>
			<SmallBtn type='continue' txt='Continue' handleClick={closeModal} />
		</div>
	)
}
