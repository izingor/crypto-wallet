import { NewsPreviewCard } from '../components/NewsPreviewCard';
import { useDispatch, useSelector } from 'react-redux';
import { newsState, getLatestNews } from '../store/modules/news.store';
import { useEffect } from 'react';
import { LoadingSpinner } from '../components/LoadingSpinner';
export const NewsPage = () => {
	const { news, status } = useSelector(newsState);
	console.log(status);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLatestNews());
	}, []);

	return (
		<div className="container flex flex-col py-4 h-fit items-center justify-center">
			{news ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
					{news.map((latestNews) => (
						<NewsPreviewCard
							latestNews={latestNews}
							key={latestNews.description}
						/>
					))}
				</div>
			) : (
				<LoadingSpinner />
			)}
		</div>
	);
};
