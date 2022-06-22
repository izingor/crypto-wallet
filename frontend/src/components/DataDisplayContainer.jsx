export const DataDisplayContainer = ({ rows }) => {
	return (
		<div className="bg-white shadow rounded overflow-hidden w-full">
			<div className="border-t border-gray-200 ">
				<dl>{rows}</dl>
			</div>
		</div>
	);
};
