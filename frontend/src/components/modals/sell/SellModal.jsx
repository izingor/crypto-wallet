import { useState } from 'react';
import { SellMenu } from './SellMenu';
import { StatusMsg } from '../status-msg/StatusMsg';

export const SellModal = ({
	user,
	walletCoinValues,
	onSellModalClicked,
	onSellCoinsClicked,
	sellStatus,
}) => {
	const [sellInfo, setSellInfo] = useState({
		symbol: user?.coins[0]?.symbol,
		amount: 1,
	});
	const handleInputsChange = ({ target }) => {
		setSellInfo((prevInfo) => ({
			...prevInfo,
			[target.name]: target.name === 'amount' ? +target.value : target.value,
		}));
	};

	const onMaxClicked = () => {
		setSellInfo((prevInfo) => ({
			...prevInfo,
			amount: coinMaxAmount,
		}));
	};

	const coinsSellValue =
		walletCoinValues && sellInfo.amount * walletCoinValues[sellInfo.symbol];

	const currCoinIdx =
		user && user.coins.findIndex((coin) => coin.symbol === sellInfo.symbol);

	const currCoinIconUrl = user?.coins[currCoinIdx]?.iconUrl;

	const coinMaxAmount =  user?.coins[currCoinIdx]?.amount;

	const sellMenuProps = {
		coinMaxAmount,
		coins: user.coins,
		onMaxClicked,
		handleInputsChange,
		symbol: sellInfo.symbol,
		amount: sellInfo.amount,
		currCoinIconUrl,
		onSellModalClicked,
		coinsSellValue,
		onSellCoinsClicked,
		uid: user.uid,
		walletCoinValues,
	};
	console.log(sellStatus);
	return (
		<div
			id="medium-modal"
			className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full  h-modal h-full"
		>
			<div className="relative h-full w-full">
				{sellStatus ? (
					<StatusMsg statusMsg={sellStatus} closeModal={onSellModalClicked} />
				) : (
					<SellMenu {...sellMenuProps} />
				)}
			</div>
		</div>
	);
};
