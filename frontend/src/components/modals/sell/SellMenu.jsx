// import React from 'react'
import { CloseXBtn } from '../../buttons/CloseXBtn';
import { TypeAndAmount } from '../../inputs/TypeAndAmount';
import { SmallBtn } from '../../buttons/SmallBtn';
import Lottie from 'lottie-react';
import calculator from '../../../assets/lottie-animations/calculator.json';

export const SellMenu = ({
	symbol,
	coinMaxAmount,
	onMaxClicked,
	handleInputsChange,
	amount,
	coins,
	currCoinIconUrl,
	walletCoinValues,
	onSellModalClicked,
	coinsSellValue,
	onSellCoinsClicked,
	uid,
}) => {

	return (
		<div className="relative  w-9/12 inset-y-auto right-1/4 t md:w-2/4 md:inset-x-auto bg-white rounded shadow translate-x-1/2 translate-y-1/4">
			<div className="flex justify-between items-center p-5 rounded-t border-b ">
				<img src={currCoinIconUrl} className="mr-4 w-14 h-14" alt="" />
				<p className="text-xs font-light text-gray-900 ">
					1 {symbol} = ${walletCoinValues[symbol]}
				</p>
				<CloseXBtn handleClick={onSellModalClicked} />
			</div>
			<TypeAndAmount
				symbol={symbol}
				amount={amount}
				coinMaxAmount={coinMaxAmount}
				onMaxClicked={onMaxClicked}
				handleInputsChange={handleInputsChange}
				coins={coins}
			/>
			<div className="flex flex-col items-center p-4 space-x-2 rounded-b border-t border-gray-200">
				<div className="w-10 h-10">
					<Lottie animationData={calculator} loop={true} />
				</div>
				<p className="text-gray-500">${coinsSellValue}</p>
			</div>

			<div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
				<SmallBtn
					type="buy"
					txt="Sell"
					handleClick={() =>
						onSellCoinsClicked({
							uid,
							sellValue: coinsSellValue,
							symbol,
							amount,
						})
					}
				/>
				<SmallBtn type="back" txt="Back" handleClick={onSellModalClicked} />
			</div>
		</div>
	);
};
