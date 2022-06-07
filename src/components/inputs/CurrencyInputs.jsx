import arrow from '../../assets/images/arrow.webp';

export const CurrencyInputs = ({
	clickedCoin,
	currencyValues,
	setCurrencyValues,
}) => {
    const {cryptoValue, usdValue} = currencyValues

    console.log(cryptoValue)
	return (
		<div className="flex w-full items-center  ">
			<input
				type="number"
				id="default-search"
				class="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
				placeholder={clickedCoin.name}
                onChange={setCurrencyValues}
                value = {cryptoValue}
                name= {cryptoValue}
				required
			/>
			<img src={arrow} className="w-14 h-14" alt="" />
			<input
				type="number"
				id="default-search"
				class="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
				placeholder="USD"
                value = {cryptoValue}
                name= {usdValue}
				required
			/>
		</div>
	);
};
