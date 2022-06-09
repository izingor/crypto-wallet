export const DataDisplayContainer = ({ rows }) => {
	return (
		<div className="bg-white shadow overflow-hidden">
			<div className="border-t border-gray-200">
				<dl>{rows}</dl>
			</div>
		</div>
	);
};
