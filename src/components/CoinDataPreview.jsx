import { Link } from 'react-router-dom';

export const CoinDataPreview = ({ coin, onBuyModalClicked }) => {
	const { symbol, price, iconUrl, uuid, marketCap, change } = coin;

	// const marketCapBilions = () => {
	// 	return (parseInt(marketCap) / 10 ** 9).toFixed(2);
	// };

	const priceFixed = () => {
		return parseFloat(price).toFixed(6);
	};

	const changeColor = () => {
		const parsedChange = parseFloat(change);
		if (parsedChange > 0) {
			return { color: '#32CD32' };
		} else {
			return { color: 'red' };
		}
	};

	return (
		<tr className="bg-white border-b  hover:bg-gray-50 ">
			<th
				scope="row"
				className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap flex items-center"
			>
				<img src={iconUrl} alt="" className="w-5 h-5" />
				{symbol}
			</th>
			<td className="px-6 py-4">{priceFixed()}</td>
			<td className="px-2 py-4" style={changeColor()}>
				{change}
			</td>
			<td className="px-2 py-4 text-left">
				<p
					onClick={() => onBuyModalClicked(coin)}
					className="font-medium text-yellow-500  hover:underline hover:cursor-pointer"
				>
					Buy
				</p>
			</td>
			<td className="px-2 py-4 text-left">
				<Link
					to={`/coins/${uuid}`}
					className="font-medium text-yellow-500  hover:underline"
				>
					Info
				</Link>
			</td>
		</tr>
	);
};
