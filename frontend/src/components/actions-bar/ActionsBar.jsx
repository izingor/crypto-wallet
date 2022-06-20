

export const ActionsBar = () => {
	return (
		<div
			class="w-full flex justify-between rounded-md  border-gray-200"
			role="group"
		>
			<button
				type="button"
				class="inline-flex items-center py-2 px-4  text-sm font-medium text-gray-900 bg-transparent  border border-gray-900 hover:bg-gray-300 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
			>
				Transactions 
			</button>
			<button
				type="button"
				class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-300 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white "
			>
				Convert
			</button>
			<button
				type="button"
				class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-300 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white "
			>
				Sell
			</button>
		</div>
	);
};
