import { WalletChartCoinPreview } from './WalletChartCoinPreview'

export const WalletChartCoinList = ({ assetsMap }) => {
	return (
		<div className='flex flex-wrap sm:flex-col h-full justify-evenly'>
			{assetsMap &&
				assetsMap.map((asset) => {
					return <WalletChartCoinPreview key={asset.symbol} assetData={asset} />
				})}
		</div>
	)
}
