import { useEffect } from 'react';
import { LoadingSpinner } from '../LoadingSpinner'

export const ConfirmationModal = ({ purchaseStatus }) => {



	return (
		<>
			<div className='relative  w-9/12 h-1/2  inset-y-auto right-1/4 t md:w-2/4 md:inset-x-auto bg-white rounded-lg shadow translate-x-1/2 translate-y-1/4 flex justify-center items-center'>
				<LoadingSpinner />
				<h1>Confirtmation modal</h1>
			</div>
		</>
	)
}
