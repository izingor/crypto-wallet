import { useState } from 'react'
import { LoadingSpinner } from '../../LoadingSpinner'
import { SmallBtn } from '../../buttons/SmallBtn'

export const SellModal = ({ user, walletCoinValues, sellModalClicked }) => {
	// const { coins } = user && user

	const [sellInfo, setSellInfo] = useState({
		coin: user?.coins[0].symbol,
		amount: 1,
	})
	const handleChange = ({ target }) => {
		// console.log('handeling change', target.value)

		setSellInfo((prevInfo) => ({
			...prevInfo,
			[target.name]: target.name === 'amount' ? +target.value : target.value,
		}))
		console.log(sellInfo)
	}

	const onBackClicked = () => {
		console.log('back clicked')
	}

	const onSellClicked = () => {
		console.log('sell clicked')
	}

	const coinsSellValue =
		walletCoinValues && sellInfo.amount * walletCoinValues[sellInfo.coin]

	return (
		<div
			id='medium-modal'
			className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full  h-modal h-full'
		>
			<div className='relative h-full w-full'>
				<div className='relative  w-9/12 inset-y-auto right-1/4 t md:w-2/4 md:inset-x-auto bg-white rounded-lg shadow translate-x-1/2 translate-y-1/4'>
					{/* <label htmlFor="coins">Your Coins</label> */}
					{/* <select name="coins" id="coins" className="w-16"> */}
					<label
						htmlFor='coins'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
					>
						Select a coin
					</label>
					<select
						onChange={(e) => handleChange(e)}
						id='coins'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5 '
						name='coin'
						value={sellInfo.coin}
					>
						{/* <input type="number" placeholder={} /> */}
						{user &&
							user.coins.map((coin) => (
								<option value={coin.symbol} key={coin.symbol}>
									{coin.symbol}
								</option>
							))}
					</select>
					<input
						name='amount'
						type='number'
						placeholder={`Max`}
						onChange={(e) => handleChange(e)}
					/>
					<p>{coinsSellValue}</p>
					<SmallBtn type='buy' txt='Sell' handleClick={onSellClicked} />
					<SmallBtn type='back' txt='Back' handleClick={sellModalClicked} />
				</div>
			</div>
		</div>
	)
}
