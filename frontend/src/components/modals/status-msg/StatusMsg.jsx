// import { purchaseStatusMsg } from './status-msg/purchaseStatusMsg'
import { FailedProcess } from './FailedProcess';
import { SuccessMsg } from './SuccessMsg';
import { LoadingSpinner } from '../../LoadingSpinner';

export const StatusMsg = ({ statusMsg, closeModal, closeMsgModal }) => {
	const ProcessedStatus = () => {
		if (statusMsg === 'success') return <SuccessMsg closeModal={closeModal} />;
		else if (statusMsg === 'failed' || statusMsg === 'funds')
			return <FailedProcess closeModal={closeMsgModal} error={statusMsg} />;
		else return <LoadingSpinner />;
	};

	return (
		<>
			<div className="relative  w-9/12 h-1/3  inset-y-auto right-1/4 t md:w-2/4 md:inset-x-auto bg-white rounded-lg shadow translate-x-1/2 translate-y-1/3 flex justify-center items-center">
				<ProcessedStatus />
			</div>
		</>
	);
};
