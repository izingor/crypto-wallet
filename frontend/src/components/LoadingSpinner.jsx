import Lottie from 'lottie-react';
import loadingSpinnerAnimation from '../assets/lottie-animations/loading.spinner.json';
export const LoadingSpinner = () => {
	const options = {
		animationData: loadingSpinnerAnimation,
		loop: true,
	};

	return (
		<div className="flex text-center justify-cente w-24 h-24">
			<Lottie {...options} />
		</div>
	);
};
