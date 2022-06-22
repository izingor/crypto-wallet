import { SmallBtn } from '../buttons/SmallBtn'

export const ActionsBar = ({ onSellModalClicked }) => {
	return (
		<div
			className='w-full flex justify-between rounded-md  border-gray-200'
			role='group'
		>
			<SmallBtn txt='Transactions' type='walletAction' />
			<SmallBtn txt='Convert' type='walletAction' />
			<SmallBtn
				txt='Sell'
				type='walletAction'
				handleClick={onSellModalClicked}
			/>
		</div>
	)
}
