export const WalletCoinPreview = ({ assetData }) => {
	return (
		<div className='w-30 h-6 flex  mb-4 items-center'>
			<div
				className=' w-6 h-6 m-6 rounded-full'
				style={{ backgroundColor: assetData.color }}
			></div>
			<p>{assetData.symbol}</p>
			<p className='mx-1'></p>
			<p>{assetData.coinsValue.toPrecision(5)}%</p>
		</div>
	)
}
