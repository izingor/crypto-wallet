import { WalletCoinPreview } from './WalletCoinPreview'

export const WalletCoinList = ({ assetsMap }) => {
	console.log(assetsMap)
	return (
		<div className="flex flex-wrap sm:flex-col h-full justify-evenly">
			{assetsMap &&
				assetsMap.map((asset) => {
					return <WalletCoinPreview key={asset.symbol} assetData={asset} />
				})}
		</div>
	)
}
