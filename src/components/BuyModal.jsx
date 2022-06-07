import { CloseXBtn } from './buttons/CloseXBtn';
import { SmallBtn } from './buttons/SmallBtn';
import { useDispatch, useSelector } from 'react-redux';
import { uiState, onBuyModalChanged } from '../store/modules/ui.store';
import { user } from '../store/modules/user.store';
import { CurrencyInputs } from './inputs/CurrencyInputs';

export const BuyModal = () => {
	const { isBuyModaLOpen, clickedCoin } = useSelector(uiState);
	const activeUser = useSelector(user);
	const dispatch = useDispatch();
	const closeModal = () => {
		dispatch(onBuyModalChanged());
		// console.log('closing modal');
	};

	const buyCoins = () => {
		console.log('buying coins');
	};

	return (
		<div
			id="medium-modal"
			className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full  h-modal h-full"
			hidden={!isBuyModaLOpen}
		>
			{clickedCoin && (
				<div className="relative h-full w-full">
					<div className="relative  w-9/12  inset-y-auto right-1/4 t md:w-2/4 md:inset-x-auto bg-white rounded-lg shadow translate-x-1/2 translate-y-1/4">
						<div className="flex justify-between items-center p-5 rounded-t border-b ">
							<h3 className="text-xl font-medium text-gray-900 ">
								Purchase {clickedCoin.name}
							</h3>
							<CloseXBtn handleClick={closeModal} />
						</div>
						<div className="p-6 space-y-6">
							<img src={clickedCoin.iconUrl} className="w-14 h-14" alt="" />
							<p className="text-base leading-relaxed text-gray-500 ">
								<strong>Your Balance </strong>- ${activeUser.usdBalance}
							</p>
							<CurrencyInputs />
						</div>
						<div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
							<SmallBtn txt="Buy" type="buy" handleClick={buyCoins} />
							<SmallBtn txt="Back" type="back" handleClick={closeModal} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
