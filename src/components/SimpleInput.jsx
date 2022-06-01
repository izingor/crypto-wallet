export const SimpleInput = ({ handleChange, inputType, valueType,placeholderText }) => {
	
    
    // const placeholderText =
	// 	inputType.charAt(0).toUpperCase() + inputType.slice(1);

	return (
		<div>
			<label htmlFor={inputType} className="sr-only">
				Email address
			</label>
			<input
				id={inputType}
				name={inputType}
				type={inputType}
				autoComplete={inputType}
				className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
				placeholder={placeholderText}
				onChange={handleChange}
				value={valueType}
				required
			/>
		</div>
	);
};
