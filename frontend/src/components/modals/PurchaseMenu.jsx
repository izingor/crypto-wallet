import { CloseXBtn } from '../buttons/CloseXBtn'
import { SmallBtn } from '../buttons/SmallBtn'
import { CurrencyInputs } from '../inputs/CurrencyInputs'

export function PurchaseMenu({
	onBuyCoinClicked,
	coin,
	closeModal,
	setCost,
	user,
	totalCost,
}) {
	return (
		<div className='relative translate-y-1/3 sm:w-9/12 inset-y-auto sm:right-1/4 t md:w-2/4 md:inset-x-auto bg-white rounded-lg shadow sm:translate-x-1/2 sm:translate-y-1/4'>
			<div className='flex justify-between items-center p-5 rounded-t border-b '>
				<img src={coin.iconUrl} className=' mr-4 w-14 h-14' alt='' />
				<p className='text-xs font-light text-gray-900 '>
					1 {coin.name} = ${coin.price}
				</p>
				<CloseXBtn handleClick={closeModal} />
			</div>
			<div className='p-6 space-y-6'>
				<p className='text-base leading-relaxed text-gray-500 '>
					<strong>Your Balance </strong>- ${user?.usdBalance}
				</p>
				<CurrencyInputs coin={coin} setCost={setCost} />
			</div>
			<p className='text-center pb-2'>
				Total Cost <strong>${totalCost?.usdAmount || coin.price}</strong>
			</p>
			<div className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200'>
				<SmallBtn txt='Buy' type='buy' handleClick={onBuyCoinClicked} />
				<SmallBtn txt='Back' type='back' handleClick={closeModal} />
			</div>
		</div>
	)
}
