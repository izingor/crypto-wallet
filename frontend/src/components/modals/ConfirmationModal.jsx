// import { purchaseStatusMsg } from './purchaseStatus-msg/purchaseStatusMsg'
import { FailedProcess } from './status-msg/FailedProcess';
import { SuccessMsg } from './status-msg/SuccessMsg';
import { LoadingSpinner } from '../LoadingSpinner';

export const ConfirmationModal = ({
	purchaseStatus,
	closeModal,
	closeMsgModal,
}) => {
	const ProcessedPurchaseStatus = () => {
		if (purchaseStatus === 'success')
			return <SuccessMsg closeModal={closeModal} />;
		else if (purchaseStatus === 'failed' || purchaseStatus === 'funds')
			return (
				<FailedProcess closeModal={closeMsgModal} error={purchaseStatus} />
			);
		else return <LoadingSpinner />;
	};

	return (
		<>
			<div className="relative  w-9/12 h-1/3  inset-y-auto right-1/4 t md:w-2/4 md:inset-x-auto bg-white rounded-lg shadow translate-x-1/2 translate-y-1/3 flex justify-center items-center">
				<ProcessedPurchaseStatus />
			</div>
		</>
	);
};
