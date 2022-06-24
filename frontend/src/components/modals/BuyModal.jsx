import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { coinState } from '../../store/modules/coin.store'
import { uiState, onBuyModalChanged } from '../../store/modules/ui.store'
import {
	userState,
	purchaseCoin,
	resetPurchaseStatus,
} from '../../store/modules/user.store'
import { StatusMsg } from './status-msg/StatusMsg'

import { LoadingSpinner } from '../LoadingSpinner'
import { PurchaseMenu } from './PurchaseMenu'

export const BuyModal = () => {
	const dispatch = useDispatch()
	const [totalCost, setTotalCost] = useState(null)
	const { isBuyModaLOpen } = useSelector(uiState)
	const { coin } = useSelector(coinState)
	const { user, purchaseStatus } = useSelector(userState)

	const closeModal = () => {
		dispatch(onBuyModalChanged())
		dispatch(resetPurchaseStatus())
	}

	const closeMsgModal = () => {
		dispatch(resetPurchaseStatus())
	}

	const setCost = (cost) => {
		setTotalCost(cost)
	}

	const onBuyCoinClicked = () => {
		if(!totalCost.usdAmount) return
		const { uuid, symbol, price, color, iconUrl } = coin
		dispatch(purchaseCoin({ totalCost, uuid, symbol, price, color, iconUrl }))
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
								<StatusMsg
									statusMsg={purchaseStatus}
									closeModal={closeModal}
									closeMsgModal={closeMsgModal}
								/>
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
