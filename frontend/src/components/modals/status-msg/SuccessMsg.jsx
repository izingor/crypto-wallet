import success from '../../../assets/lottie-animations/success.json';
import { SmallBtn } from '../../buttons/SmallBtn';
import Lottie from 'lottie-react';
import { useRef } from 'react';
export const SuccessMsg = ({ closeModal }) => {
	const ref = useRef();

	const options = {
		animationData: success,
		loop: true,
	};

	return (
		<div className="flex flex-col justify-center items-center h-full">
			<div className="w-28 h-28 mb-2">
				<Lottie {...options} />
			</div>

			<p className="pb-4">Success!</p>
			<SmallBtn type="continue" txt="Continue" handleClick={closeModal} />
		</div>
	);
};
