export const CurrencyInputs = () => {
	return (
		<div className="flex justify-between w-9/12">
			<input
				type="search"
				id="default-search"
				class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
				placeholder="Search Mockups, Logos..."
				required
			/>
            
			<input
				type="search"
				id="default-search"
				class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
				placeholder="USD"
				required
			/>
		</div>
	);
};
