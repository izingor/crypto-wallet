// import React from 'react';

export const TypeAndAmount = ({
	symbol,
	amount,
	coinMaxAmount,
	onMaxClicked,
	handleInputsChange,
    coins
}) => {
	return (
		<div className="p-6 flex flex-col justify-center">
			<label
				htmlFor="inputs"
				className="block mb-2 text-sm font-medium text-gray-900 "
			>
				Select coin and amount
			</label>
			<div id="inputs" className="flex w-full justify-start items-center">
				<select
					onChange={(e) => handleInputsChange(e)}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l focus:ring-blue-500 focus:border-blue-500 block w-2/5 sm:w-1/4 p-2.5 "
					name="symbol"
					value={symbol}
				>
					{coins &&
						coins.map((coin) => (
							<option value={coin.symbol} key={coin.symbol}>
								{coin.symbol}
							</option>
						))}
				</select>
				<input
					value={amount}
					min={0}
					max={coinMaxAmount}
					name="amount"
					id="amounInput"
					type="number"
					placeholder={`Max ${coinMaxAmount}`}
					onChange={(e) => handleInputsChange(e)}
					className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r focus:ring-blue-500 focus:border-blue-500 block w p-2.5 w-1/2 sm:w-3/5"
				/>

				<p
					onClick={() => onMaxClicked()}
					className="text-sm ml-5 p-2 text-gray-500 hover:cursor-pointer border rounded hover:bg-slate-100"
				>
					Max
				</p>
			</div>
		</div>
	);
};
