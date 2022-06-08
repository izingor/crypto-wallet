export const SmallBtn = ({ txt, type, handleClick }) => {
	const btnClass = () => {
		if (type === 'buy') {
			return 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center';
		} else if (type === 'back') {
			return 'text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ';
		}
	};

	return (
		<button onClick={handleClick} type="button" className={btnClass()}>
			{txt}
		</button>
	);
};
