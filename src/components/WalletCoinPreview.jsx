export const WalletCoinPreview = ({ assetData }) => {
	return (
		<div
			className="flex justify-between"
			style={{ backgroundColor: assetData.color }}
		></div>
	);
};
