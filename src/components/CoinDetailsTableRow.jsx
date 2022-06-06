export const CoinDetailsTableRow = ({ isGrey, dt, dd }) => {
	const rowClass = isGrey
		? 'bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'
		: 'bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6';
	return (
		<div className={rowClass}>
			<dt className="text-sm font-medium text-gray-500">{dt}</dt>
			<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{dd}</dd>
		</div>
	);
};
