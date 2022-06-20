// import failedAlert from '../../../assets/images/Alert.webp'
import { SmallBtn } from '../../buttons/SmallBtn';
import Lottie from 'lottie-react';
import failedProcess from '../../../assets/lottie-animations/fail.json';
export const FailedProcess = ({ closeModal, error }) => {
	console.log(error);
	const errorMsg =
		error === 'funds'
			? 'No enough funds available'
			: 'Action failed, try again later';

	return (
		<div className="flex flex-col justify-center items-center  h-full ">
			<div className="w-28 h-28 mb-2">
				<Lottie animationData={failedProcess} />
			</div>
			<p className="pb-4">{errorMsg}</p>
			<SmallBtn type="back" txt="Back to dashboard" handleClick={closeModal} />
		</div>
	);
};
