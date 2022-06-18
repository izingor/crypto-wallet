import { LoadingSpinner } from '../LoadingSpinner'

export const ConfirmationModal = () => {
	return (
		<div
			id='medium-modal'
			className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full  h-modal h-full'
		>
			<div className='relative h-full w-full'>
				<div className='relative  w-9/12 h-1/2  inset-y-auto right-1/4 t md:w-2/4 md:inset-x-auto bg-white rounded-lg shadow translate-x-1/2 translate-y-1/4'>
					<LoadingSpinner />
					<h1>hello</h1>
				</div>
			</div>
		</div>
	)
}
