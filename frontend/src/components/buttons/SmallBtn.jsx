export const SmallBtn = ({
	txt = null,
	type = null,
	handleClick = null,
	isSellBtnBlocked = null,
}) => {
	const btnClass = () => {
		if (isSellBtnBlocked) {
			return 'hidden'
		} else if (type === 'buy') {
			return 'text-white bg-blue-600 rounded hover:bg-blue-700 hover:text-amber-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center'
		} else if (type === 'back') {
			return 'text-gray-500 bg-white rounded hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 '
		} else if (type === 'continue') {
			return 'text-white bg-green-400 rounded hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center'
		} else if (type === 'walletAction') {
			return 'text-white bg-blue-600 rounded hover:bg-blue-700 hover:text-amber-200 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium  text-sm px-4 sm:px-10 py-2.5 text-center'
		} else if (type === 'transactions') {
			return 'text-white bg-blue-600 rounded hover:bg-blue-700 hover:text-amber-200 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium  text-sm px-10 sm:px-10 py-2.5 text-center'
		}
	}

	return (
		<button onClick={handleClick} type='button' className={btnClass()}>
			{txt}
		</button>
	)
}
