import { coinState, getCoins } from '../store/modules/coin.store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CoinDataPreview } from '../components/CoinDataPreview';
import { LoadingSpinner } from '../components/LoadingSpinner';
export const RatesPage = () => {
	// const [tradeVolume, setTradeVolume] = useState(null);
	const { coins, status } = useSelector(coinState);
	
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCoins());
	}, []);
	// console.log(coins)

	return (
		<section className=" container flex flex-col min-h-fit items-center">
			{coins ? (
				<div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg my-5">
					<table className="w-full text-sm text-left text-gray-500 ">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
							<tr>
								<th scope="col" className="px-6 py-3">
									Symbol
								</th>
								{/* <th scope="col" className="px-6 py-3">
									Name
								</th> */}
								<th scope="col" className="px-6 py-3">
									Price (USD)
								</th>
								<th scope="col" className="px-3 py-3">
									Market cap Billon (USD)
								</th>
								<th scope="col" className="px-2 py-3">
									Change (%)
								</th>
								<th scope="col" className="px-2 py-3">
									<span className="sr-only">Buy</span>
								</th>
								<th scope="col" className="px-2 py-3">
									<span className="sr-only">Info</span>
								</th>
							</tr>
						</thead>
						<tbody>
							{coins.map((coin) => (
								<CoinDataPreview key={coin.uuid} coin={coin} />
							))}
						</tbody>
					</table>
				</div>
			) : (
				<LoadingSpinner />
			)}
		</section>
	);
};

// 	<tr>
// 		<td>Coin</td>
// 		<td>Price(USD)</td>
// 		<td>High day</td>
// 		<td>Low day</td>
// 	</tr>
// </thead>
// <tbody>
