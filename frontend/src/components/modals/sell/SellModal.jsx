import { useState } from 'react'
import { LoadingSpinner } from '../../LoadingSpinner'
import { SmallBtn } from '../../buttons/SmallBtn'
import { CloseXBtn } from '../../buttons/CloseXBtn'
import Lottie from 'lottie-react'
import calculator from '../../../assets/lottie-animations/calculator.json'

export const SellModal = ({
	user,
	walletCoinValues,
	onSellModalClicked,
	onSellCoinsClicked,
}) => {
	const [sellInfo, setSellInfo] = useState({
		coin: user?.coins[0].symbol,
		amount: 1,
	})
	const handleChange = ({ target }) => {
		setSellInfo((prevInfo) => ({
			...prevInfo,
			[target.name]: target.name === 'amount' ? +target.value : target.value,
		}))
	}

	// const onSellClicked = () => {
	// 	console.log('sell clicked')

	// }

	const onMaxClicked = () => {
		console.log('max clicked')
		setSellInfo((prevInfo) => ({
			...prevInfo,
			amount: coinMaxAmount,
		}))
	}
	const coinsSellValue =
		walletCoinValues && sellInfo.amount * walletCoinValues[sellInfo.coin]

	const currCoinIdx =
		user && user.coins.findIndex((coin) => coin.symbol === sellInfo.coin)

	const currCoinIconUrl = user.coins[currCoinIdx].iconUrl

	const coinMaxAmount = user.coins[currCoinIdx].amount

	return (
		<div
			id='medium-modal'
			className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full  h-modal h-full'
		>
			<div className='relative h-full w-full'>
				<div className='relative  w-9/12 inset-y-auto right-1/4 t md:w-2/4 md:inset-x-auto bg-white rounded shadow translate-x-1/2 translate-y-1/4'>
					<div className='flex justify-between items-center p-5 rounded-t border-b '>
						<img src={currCoinIconUrl} className='mr-4 w-14 h-14' alt='' />
						<p className='text-xs font-light text-gray-900 '>
							1 {sellInfo.coin} = ${walletCoinValues[sellInfo.coin]}
						</p>
						<CloseXBtn handleClick={onSellModalClicked} />
					</div>
					<div className='p-6 flex flex-col justify-center'>
						<label
							htmlFor='inputs'
							className='block mb-2 text-sm font-medium text-gray-900 '
						>
							Select coin and amount
						</label>
						<div id='inputs' className='flex w-full justify-start items-center'>
							<select
								onChange={(e) => handleChange(e)}
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l focus:ring-blue-500 focus:border-blue-500 block w-2/5 sm:w-1/4 p-2.5 '
								name='coin'
								value={sellInfo.coin}
							>
								{user &&
									user.coins.map((coin) => (
										<option value={coin.symbol} key={coin.symbol}>
											{coin.symbol}
										</option>
									))}
							</select>
							<input
								value={sellInfo.amount}
								min={0}
								max={coinMaxAmount}
								name='amount'
								id='amounInput'
								type='number'
								placeholder={`Max ${coinMaxAmount}`}
								onChange={(e) => handleChange(e)}
								className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r focus:ring-blue-500 focus:border-blue-500 block w p-2.5 w-1/2 sm:w-3/5'
							/>

							<p
								onClick={() => onMaxClicked()}
								className='text-sm ml-5 p-2 text-gray-500 hover:cursor-pointer border rounded hover:bg-slate-100'
							>
								Max
							</p>
						</div>
					</div>
					<div className='flex flex-col items-center p-4 space-x-2 rounded-b border-t border-gray-200'>
						<div className='w-10 h-10'>
							<Lottie animationData={calculator} loop={true} />
						</div>
						<p className='text-gray-500'>${coinsSellValue}</p>
					</div>

					<div className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200'>
						<SmallBtn type='buy' txt='Sell' handleClick={() => onSellCoinsClicked({uid:user.uid, ...sellInfo})} />
						<SmallBtn type='back' txt='Back' handleClick={onSellModalClicked} />
					</div>
				</div>
			</div>
		</div>
	)
}
