import { coinState, getCoins } from '../store/modules/coin.store';
import { onBuyModalChanged } from '../store/modules/ui.store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CoinDataPreview } from '../components/CoinDataPreview';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { user } from '../store/modules/user.store';
import { useHistory } from 'react-router-dom';

export const RatesPage = () => {
	const { coins } = useSelector(coinState);
	const activeUser = useSelector(user);
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCoins());
	}, []);

	const onBuyModalClicked = ({ name, price, iconUrl, uuid, symbol }) => {
		if (!activeUser) {
			history.push('/login');
			return;
		}
		dispatch(onBuyModalChanged({ name, price, iconUrl, uuid, symbol }));
	};

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
								<th scope="col" className="px-6 py-3">
									Price (USD)
								</th>
								<th scope="col" className="px-2 py-3">
									Change (%)
								</th>
								<th scope="col" className="px-2 py-3"></th>
								<th scope="col" className="px-2 py-3"></th>
							</tr>
						</thead>
						<tbody>
							{coins.map((coin) => (
								<CoinDataPreview
									key={coin.uuid}
									coin={coin}
									onBuyModalClicked={onBuyModalClicked}
								/>
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
