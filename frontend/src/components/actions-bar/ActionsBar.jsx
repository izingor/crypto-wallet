import { SmallBtn } from '../buttons/SmallBtn'

export const ActionsBar = ({ onSellModalClicked, onTransactionsClicked }) => {
	return (
		<div
			className='w-full flex justify-between rounded-md  border-gray-200'
			role='group'
		>
			<SmallBtn
				txt='Transactions'
				type='walletAction'
				handleClick={onTransactionsClicked}
			/>
			<SmallBtn txt='Convert' type='walletAction' />
			<SmallBtn
				txt='Sell'
				type='walletAction'
				handleClick={onSellModalClicked}
			/>
		</div>
	)
}
