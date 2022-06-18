import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { coinState } from '../../store/modules/coin.store'
import { uiState, onBuyModalChanged } from '../../store/modules/ui.store'
import {
	userState,
	purchaseCoin,
	resetPurchaseStatus,
} from '../../store/modules/user.store'
import { ConfirmationModal } from './ConfirmationModal'
import { useHistory } from 'react-router-dom'

import { LoadingSpinner } from '../LoadingSpinner'
import { PurchaseMenu } from './PurchaseMenu'

export const BuyModal = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const [totalCost, setTotalCost] = useState(null)
	const { isBuyModaLOpen } = useSelector(uiState)
	const { coin } = useSelector(coinState)
	const { user, purchaseStatus } = useSelector(userState)

	const closeModal = () => {
		dispatch(onBuyModalChanged())
	}

	const setCost = (cost) => {
		setTotalCost(cost)
	}

	const onBuyCoinClicked = () => {
		const { uuid, symbol, price, color } = coin
		dispatch(purchaseCoin({ totalCost, uuid, symbol, price, color }))
		// console.log('buying coin')

		// closeModal();
		// history.push('/rates');
	}

	const purchaseMenuProps = {
		closeModal,
		setCost,
		onBuyCoinClicked,
		coin,
		user,
		totalCost,
	}

	return (
		<>
			{isBuyModaLOpen && (
				<div
					id='medium-modal'
					className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full  h-modal h-full'
				>
					{coin ? (
						<div className='relative h-full w-full'>
							{purchaseStatus ? (
								<ConfirmationModal purchaseStatus={purchaseStatus} />
							) : (
								<PurchaseMenu {...purchaseMenuProps} />
							)}
						</div>
					) : (
						<LoadingSpinner />
					)}
				</div>
			)}
		</>
	)
}
