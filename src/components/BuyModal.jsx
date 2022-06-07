import { useState } from 'react';
import { CloseXBtn } from './buttons/CloseXBtn';
import { SmallBtn } from './buttons/SmallBtn';
import { useDispatch, useSelector } from 'react-redux';
import { uiState } from '../store/modules/ui.store';

export const BuyModal = () => {
	const { isBuyModaL, chosenCoin } = useSelector(uiState);

	const closeModal = () => {
		console.log('closing modal');
	};

	const buyCoins = () => {
		console.log('buying coins');
	};

	return (
		<div
			id="medium-modal"
			className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-40 w-full  h-modal h-full"
		>
			<div className="relative h-full w-full">
				<div className="relative  w-9/12  inset-y-auto right-1/4 t md:w-2/4 md:inset-x-auto bg-white rounded-lg shadow translate-x-1/2 translate-y-1/4">
					<div className="flex justify-between items-center p-5 rounded-t border-b ">
						<h3 className="text-xl font-medium text-gray-900 ">
							{/* Purchase {coinName} Coins */}
						</h3>
						<CloseXBtn handleClick={closeModal} />
					</div>
					<div className="p-6 space-y-6">
						<p className="text-base leading-relaxed text-gray-500 ">
							With less than a month to go before the European Union enacts new
							consumer privacy laws for its citizens, companies around the world
							are updating their terms of service agreements to comply.
						</p>
						<p className="text-base leading-relaxed text-gray-500 ">
							The European Union’s General Data Protection Regulation (G.D.P.R.)
							goes into effect on May 25 and is meant to ensure a common set of
							data rights in the European Union. It requires organizations to
							notify users as soon as possible of high-risk data breaches that
							could personally affect them.
						</p>
					</div>
					<div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
						<SmallBtn txt="Buy" type="buy" handleClick={buyCoins} />
						<SmallBtn txt="Back" type="back" handleClick={closeModal} />
					</div>
				</div>
			</div>
		</div>
	);
};
