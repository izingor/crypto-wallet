import React from 'react'

export const GenericModal = ({modalMenu}) => {
	return (
		<div
			id='medium-modal'
			className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full  h-modal h-full'
		>
			<div className='relative h-full w-full'>
                {modalMenu}
            </div>
		</div>
	)
}
