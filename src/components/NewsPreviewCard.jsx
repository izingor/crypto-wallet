export const NewsPreviewCard = ({ latestNews }) => {
	const { date, title, link, source, description, tags } = latestNews;
	const backgroundImage = { backgroundImage: `url(${tags[0].icon})` };
	const sourceClass =
		'font-light font-mono text-xs text-gray-500 hover:text-gray-900 transition-all duration-200';
	const onCardClicked = () => {
		window.location.href = link;
	};
	return (
		<div
			onClick={onCardClicked}
			className="card m-3 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 bg-no-repeat bg-right-bottom bg-[length:75px_75px] bg-origin-content p-4 "
			style={backgroundImage}
		>
			<div className="m-4">
				<h2 className="text-lg mb-2">{title}</h2>
				<p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
					{description}
				</p>
				<div className="flex flex-col mt-3">
					<p className={sourceClass}>{date}</p>
					<p className={sourceClass}>{source}</p>
				</div>
			</div>
		</div>
	);
};
