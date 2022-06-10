import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { purchaseCoin, coinState } from '../../store/modules/coin.store'
import { uiState, onBuyModalChanged } from '../../store/modules/ui.store'
import { user } from '../../store/modules/user.store'
import { CurrencyInputs } from '../inputs/CurrencyInputs'
import { SmallBtn } from '../buttons/SmallBtn'
import { CloseXBtn } from '../buttons/CloseXBtn'
import { useHistory } from 'react-router-dom'

export const BuyModal = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const [totalCost, setTotalCost] = useState(null)
	const { isBuyModaLOpen } = useSelector(uiState)
	const { coin } = useSelector(coinState)
	const activeUser = useSelector(user)

	const closeModal = () => {
		dispatch(onBuyModalChanged())
	}

	const setCost = (cost) => {
		setTotalCost(cost)
	}

	const onBuyCoinClicked = () => {
		const { uuid, symbol, price } = coin
		dispatch(purchaseCoin({ totalCost, uuid, symbol, price }))
		
		closeModal()
		history.push('/rates')
	}

	return (
		<div
			id='medium-modal'
			className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full  h-modal h-full'
			hidden={!isBuyModaLOpen}
		>
			{coin && (
				<div className='relative h-full w-full'>
					<div className='relative  w-9/12  inset-y-auto right-1/4 t md:w-2/4 md:inset-x-auto bg-white rounded-lg shadow translate-x-1/2 translate-y-1/4'>
						<div className='flex justify-between items-center p-5 rounded-t border-b '>
							<img src={coin.iconUrl} className=' mr-4 w-14 h-14' alt='' />
							<p className='text-xs font-light text-gray-900 '>
								1 {coin.name} = ${coin.price}
							</p>
							<CloseXBtn handleClick={closeModal} />
						</div>
						<div className='p-6 space-y-6'>
							<p className='text-base leading-relaxed text-gray-500 '>
								<strong>Your Balance </strong>- ${activeUser?.usdBalance}
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
				</div>
			)}
		</div>
	)
}
