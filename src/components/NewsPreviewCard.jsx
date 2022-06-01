export const NewsPreviewCard = () => {

    
	return (
		<div className="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
			<div className="m-3">
				<h2 className="text-lg mb-2">
					Title
					<span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
						Tag
					</span>
				</h2>
				<p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
					Space, the final frontier. These are the voyages of the Starship
					Enterprise. Its five-year mission: to explore strange new worlds.
				</p>
			</div>
		</div>
	);
};
