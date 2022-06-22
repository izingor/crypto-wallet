import arrow from '../../assets/images/arrow.webp';
import { useState, useEffect } from 'react';
export const CurrencyInputs = ({ coin, setCost }) => {
	const [amount, setAmount] = useState(1);
	const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

	let toAmount, fromAmount;
	if (amountInFromCurrency) {
		fromAmount = amount;
		toAmount = amount * coin.price;
	} else {
		toAmount = amount;
		fromAmount = amount / coin.price;
	}

	useEffect(() => {
		setCost({ usdAmount: +toAmount, coinAmount: +fromAmount });
	}, [toAmount]);

	const handleToAmountChange = ({ target }) => {
		setAmount(target.value);
		setAmountInFromCurrency(true);
	};
	const handleFromAmountChange = ({ target }) => {
		setAmount(target.value);
		setAmountInFromCurrency(false);
	};

	return (
		<div className="flex w-full items-center">
			<div className="w-full">
				<label htmlFor="fromCurrency">{coin.symbol}</label>
				<input
					type="number"
					id="fromCurrency"
					className="block p-2  w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
					value={fromAmount}
					onChange={handleToAmountChange}
					placeholder={coin.name}
					min={1}
					required
				/>
			</div>
			<img src={arrow} className="w-10 h-10 mx-2 self-end" alt="" />
			<div className="w-full">
				<label htmlFor="toCurrency">USD</label>
				<input
					type="number"
					id="toCurrency"
					className="block p-2 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
					value={toAmount}
					placeholder="USD"
					onChange={handleFromAmountChange}
					min={1}
					required
				/>
			</div>
		</div>
	);
};
