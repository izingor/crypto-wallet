export const SmallBtn = ({ txt = null, type = null, handleClick = null }) => {
	const btnClass = () => {
		if (type === 'buy') {
			return 'text-white bg-blue-600 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center'
		} else if (type === 'back') {
			return 'text-gray-500 bg-white rounded hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 '
		} else if (type === 'continue') {
			return 'text-white bg-green-400 rounded hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center'
		} else if (type === 'sell') {
			return 'text-white bg-yellow-400 rounded hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-10 py-2.5 text-center'
		}
	}

	return (
		<button onClick={handleClick} type='button' className={btnClass()}>
			{txt}
		</button>
	)
}
