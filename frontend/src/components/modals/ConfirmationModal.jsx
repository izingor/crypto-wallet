// import { purchaseStatusMsg } from './purchaseStatus-msg/purchaseStatusMsg'
import { ProcessingMsg } from './status-msg/ProcessingMsg'
import { FailedProcess } from './status-msg/FailedProcess'
import { SuccessMsg } from './status-msg/SuccessMsg'

export const ConfirmationModal = ({
	purchaseStatus,
	closeModal,
	closeMsgModal,
}) => {
	console.log(purchaseStatus)
	const ProcessedPurchaseStatus = () => {
		if (purchaseStatus === 'success')
			return <SuccessMsg closeModal={closeModal} />
		else if (purchaseStatus === 'failure')
			return <FailedProcess closeModal={closeMsgModal} />
		else return <ProcessingMsg />
	}

	return (
		<>
			<div className='relative  w-9/12 h-1/2  inset-y-auto right-1/4 t md:w-2/4 md:inset-x-auto bg-white rounded-lg shadow translate-x-1/2 translate-y-1/4 flex justify-center items-center'>
				{/* <purchaseStatusMsg processedpurchaseStatus={processedpurchaseStatus()} /> */}
				<ProcessedPurchaseStatus />
			</div>
		</>
	)
}
