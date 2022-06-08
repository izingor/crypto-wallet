import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { purchaseCoin } from '../store/modules/coin.store';
import { uiState, onBuyModalChanged } from '../store/modules/ui.store';
import { user } from '../store/modules/user.store';
import { CurrencyInputs } from './inputs/CurrencyInputs';
import { SmallBtn } from './buttons/SmallBtn';
import { CloseXBtn } from './buttons/CloseXBtn';

export const BuyModal = () => {
	const dispatch = useDispatch();
	const [totalCost, setTotalCost] = useState(null);
	const { isBuyModaLOpen, clickedCoin } = useSelector(uiState);
	const activeUser = useSelector(user);

	const closeModal = () => {
		dispatch(onBuyModalChanged());
	};

	const setCost = (cost) => {
		console.log(cost)
		setTotalCost(cost);
	};

	const onBuyCoinClicked = () => {
		const { uuid, symbol, price } = clickedCoin;
		dispatch(purchaseCoin({ totalCost, uuid, symbol, price }));
	};

	return (
		<div
			id="medium-modal"
			className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full  h-modal h-full"
			hidden={!isBuyModaLOpen}
		>
			{clickedCoin && (
				<div className="relative h-full w-full">
					{/* {totalCost} */}
					<div className="relative  w-9/12  inset-y-auto right-1/4 t md:w-2/4 md:inset-x-auto bg-white rounded-lg shadow translate-x-1/2 translate-y-1/4">
						<div className="flex justify-between items-center p-5 rounded-t border-b ">
							<img
								src={clickedCoin.iconUrl}
								className=" mr-4 w-14 h-14"
								alt=""
							/>
							<h3 className="text-xl font-medium text-gray-900 ">
								1 {clickedCoin.name} = ${clickedCoin.price}
							</h3>
							<CloseXBtn handleClick={closeModal} />
						</div>
						<div className="p-6 space-y-6">
							<p className="text-base leading-relaxed text-gray-500 ">
								<strong>Your Balance </strong>- ${activeUser.usdBalance}
							</p>
							<CurrencyInputs clickedCoin={clickedCoin} setCost={setCost} />
						</div>
						<p className="text-center pb-2">
							Total Cost <strong>${totalCost?.usdAmount || clickedCoin.price}</strong>
						</p>
						<div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
							<SmallBtn txt="Buy" type="buy" handleClick={onBuyCoinClicked} />
							<SmallBtn txt="Back" type="back" handleClick={closeModal} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
