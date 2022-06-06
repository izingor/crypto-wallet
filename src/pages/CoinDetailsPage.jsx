import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { coinState, getCoin } from '../store/modules/coin.store';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const CoinDetailsPage = () => {
	const { coinId } = useParams();
	const dispatch = useDispatch();
	const { coin } = useSelector(coinState);
	// const { name, price, iconUrl, websiteUrl, description, allTimeHigh } = coin;

	useEffect(() => {
		dispatch(getCoin(coinId));
	}, []);
	// const coinInfo = coins?.find((coin) => coin.uuid === coinId);
	// const { symbol, name, price, iconUrl, uuid, marketCap, change } = coinInfo;
	// console.log('coin', coins);
	// console.log('coin', coinInfo);
	// console.log(coin.sparkline)

	const xAxis = () => {
		const data = [];
		coin?.sparkline.forEach((price, idx) => {
			data.push(idx);
		});
		return data;
	};

	const coinData = {
		labels: xAxis(),
		datasets: [
			{
				label: 'Dataset 1',
				data: coin.sparkline,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	};

	const options = {
		elements: {
			point: {
				pointStyle: 'dash',
			},
		},
		layout: {
			autoPadding: false,
			padding: 0,
		},
		responsive: true,
		plugins: {
			legend: false,
		},
		scales: {
			y: {
				min: Math.min(...coin.sparkline),
				max: Math.max(...coin.sparkline),
				grid: {
					display: false,
				},
			},
			x: {
				grid: {
					display: false,
				},
			},
		},
	};

	return (
		<section className="container items-center justify-center">
			{coin ? (
				<div className="bg-white shadow overflow-hidden sm:rounded-lg">
					<div className="px-4 py-5 sm:px-6">
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Currency Information
						</h3>
					</div>
					<div className="border-t border-gray-200">
						<dl>
							<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Name</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									{coin.name}
								</dd>
							</div>
							<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Symbol</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									<img src={coin.iconUrl} alt="" className="w-8 h-8" />
								</dd>
							</div>
							<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Website</dt>
								<a
									href={coin.websiteUrl}
									className="mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2"
								>
									{coin.websiteUrl}
								</a>
							</div>
							<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">
									Price(USD)
								</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									{coin.price}
								</dd>
							</div>
							<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">
									All time high(USD)
								</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									{coin.allTimeHigh.price}
								</dd>
							</div>
							<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Chart</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									<Line options={options} data={coinData} />
								</dd>
							</div>
						</dl>
					</div>
				</div>
			) : (
				<LoadingSpinner />
			)}
		</section>
	);
};
