import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { coinState, getCoin } from '../store/modules/coin.store';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { CoinDetailsTableRow } from '../components/CoinDetailsTableRow';
import { CoinChart } from '../components/CoinChart';

export const CoinDetailsPage = () => {
	const { coinId } = useParams();
	const dispatch = useDispatch();
	const { coin } = useSelector(coinState);

	useEffect(() => {
		dispatch(getCoin(coinId));
	}, []);

	return (
		<section className="container items-center justify-center py-8">
			{coin ? (
				<div className="bg-white shadow overflow-hidden sm:rounded-lg">
					<div className="px-4 py-5 sm:px-6">
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Currency Information
						</h3>
					</div>
					<div className="border-t border-gray-200">
						<dl>
							<CoinDetailsTableRow isGrey={true} dt="Name" dd={coin.name} />
							<CoinDetailsTableRow
								isGrey={false}
								dt="Symbol"
								dd={<img src={coin.iconUrl} alt="" className="w-8 h-8" />}
							/>
							<CoinDetailsTableRow
								isGrey={true}
								dt="Website"
								dd={
									<a
										href={coin.websiteUrl}
										className="mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2"
									>
										{coin.websiteUrl}
									</a>
								}
							/>
							<CoinDetailsTableRow
								isGrey={false}
								dt="Price(USD)"
								dd={coin.price}
							/>
							<CoinDetailsTableRow
								isGrey={true}
								dt="All time high(USD)"
								dd={coin.allTimeHigh.price}
							/>					
							<CoinDetailsTableRow
								isGrey={false}
								dt="Chart"
								dd={<CoinChart sparkline={coin.sparkline} />}
							/>
						</dl>
					</div>
				</div>
			) : (
				<LoadingSpinner />
			)}
		</section>
	);
};
