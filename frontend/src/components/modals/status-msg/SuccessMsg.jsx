import success from '../../../assets/lottie-animations/success.json'
import { SmallBtn } from '../../buttons/SmallBtn'
import Lottie from 'lottie-react'
export const SuccessMsg = ({ closeModal }) => {
	return (
		<div className='flex flex-col justify-between items-center h-1/3 w-1/3'>
			{/* <img className='w-10 h-10' src={success} alt='' />
			 */}
             <div className = "w-20 h-20">
			<Lottie animationData={success} />
             </div>

			<p className = "pb-4">Success!</p>
			<SmallBtn type='continue' txt='Continue' handleClick={closeModal} />
		</div>
	)
}
