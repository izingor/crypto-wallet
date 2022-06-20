import { LoadingSpinner } from '../../LoadingSpinner';

export const SellModal = ({ user, walletCoinValues }) => {
	console.log(walletCoinValues);

	return (
		<div
			id="medium-modal"
			className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full  h-modal h-full"
		>
			<div className="relative h-full w-full">
				<div className="relative  w-9/12 inset-y-auto right-1/4 t md:w-2/4 md:inset-x-auto bg-white rounded-lg shadow translate-x-1/2 translate-y-1/4">
					<select name="coins" id="">
						{user &&
							user.coins.map((coin) => (
								<option value={coin.symbol} key={coin.symbol}>
									{coin.symbol}
								</option>
							))}
					</select>
				</div>
			</div>
		</div>
	);
};