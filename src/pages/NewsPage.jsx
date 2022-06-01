import { NewsPreviewCard } from '../components/NewsPreviewCard';
export const NewsPage = () => {
	return (
		<div className="container flex flex-col h-full py-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
				<NewsPreviewCard />
			</div>
		</div>
	);
};
