import Lottie from 'lottie-react';
import loadingSpinnerAnimation from '../assets/lottie-animations/loading.spinner.json';
export const LoadingSpinner = () => {
	const options = {
		animationData: loadingSpinnerAnimation,
		loop: true,
		
	};

	return (
		<div className="p-0 m-0 text-center justify-center items-center w-16 h-16">
			<Lottie  {...options} />
			</div>
	);
};
