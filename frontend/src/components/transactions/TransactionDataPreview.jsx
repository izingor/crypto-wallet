import { useState } from 'react'

export const TransactionDataPreview = ({ transaction }) => {
	const [isExpanded, setIsExpanded] = useState(false)

	console.log(transaction)
	const handleClick = () => {
		setIsExpanded(!isExpanded)
		console.log('i got clicked')
	}

	const arrowSvg = (
		<svg
			className='w-6 h-6 shrink-0'
			fill='currentColor'
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fillRule='evenodd'
				d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
				clipRule='evenodd'
			></path>
		</svg>
	)

	const date = (stamp) => {
		const transDate = new Date(stamp)
		return `${transDate.getDate()}/${transDate.getMonth()}/${transDate.getFullYear()}`
	}

	const transactionType = (usdAmount) => {
		return usdAmount < 0 ? (
			<p className='text-red-500 mb-2'>Purchase</p>
		) : (
			<p className='text-green-500 mb-2'>Sale</p>
		)
	}

	return (
		<tr
			className='bg-white border-b relative hover:bg-gray-50 hover:cursor-pointer ease-in-out duration-300'
			onClick={handleClick}
		>
			<td className='pl-4  flex flex-col'>
				<div className=''>
					<p className='mb-2'>{date(transaction.timestamp)}</p>
					{isExpanded && <p>Symbol:{transaction.symbol}</p>}
				</div>
			</td>
			<td className='py-5 w-2/5'>
				<div>
					<p className='mb-2'>${transaction.usdAmount.toFixed(3)}</p>
					{isExpanded && <p className='mb-2'>Coins:{transaction.coinAmount}</p>}
					{isExpanded && <p>Valued:${transaction.coinValue}</p>}
				</div>
			</td>
			<td className='py-4 flex flex-col'>
				<div>{transactionType(transaction.usdAmount)}</div>
			</td>
			<td className={`absolute top-4 right-5 ${isExpanded && 'rotate-180'}`}>
				{arrowSvg}
			</td>
		</tr>
	)
}
