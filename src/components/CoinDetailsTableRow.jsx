export const CoinDetailsTableRow = ({
	isGrey,
	dt ='',
	dd = null,
	btn = null,
	chart = null,
}) => {
	const rowClass = isGrey
		? ' bg-gray-50 px-4 py-5 grid grid-cols-3 gap-4 px-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'
		: ' bg-white px-4 py-5 grid grid-cols-3 gap-4 px-4  sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6';
	return (
		<div className={rowClass}>
			{dt && <dt className="text-sm font-medium text-gray-500">{dt}</dt>}
			{chart ? (
				<dd className = "mt-1 text-sm text-gray-900 col-span-3 sm:mt-0 sm:col-span-4">
					{chart}
				</dd>

			) : (
				<dd className="mt-1 text-sm text-gray-900 col-span-2 sm:mt-0 sm:col-span-3">
					{dd}
				</dd>
			)}
			{btn}
		</div>
	);
};
