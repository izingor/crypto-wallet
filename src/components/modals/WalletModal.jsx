export const WalletModal = () => {
	return (
		<>
			<div
				id='medium-modal'
				className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full  h-modal h-full'
                hidden={true}
			>
				<div className='relative h-full w-full'>
					<div className='relative  w-9/12  inset-y-auto right-1/4 t md:w-2/4 md:inset-x-auto bg-white rounded-lg shadow translate-x-1/2 translate-y-1/4'>
						<div className='flex justify-between items-center p-5 rounded-t border-b '>
							<h3 className='text-xl font-medium text-gray-900 '>1</h3>
						</div>
						<div className='p-6 space-y-6'>
							<p className='text-base leading-relaxed text-gray-500 '>
								<strong>Your Balance </strong>
							</p>
						</div>
						<p className='text-center pb-2'>Total Cost</p>
						<div className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200'></div>
					</div>
				</div>
			</div>
		</>
	)
}
