import { useSelector } from 'react-redux'
import { userState } from '../store/modules/user.store'
import { TransactionDataPreview } from '../components/transactions/TransactionDataPreview'
import { SmallBtn } from '../components/buttons/SmallBtn'
import { useHistory } from 'react-router-dom'
import { LargeBtn } from '../components/buttons/LargeBtn'

export const TransactionsPage = () => {
	const history = useHistory()
	const { user } = useSelector(userState)
	// const { transactions } = user
	const onBackBtnClicked = () => {
		history.goBack()
	}

	return (
		<div className='container'>
			<div className='w-full relative overflow-x-auto shadow-md sm:rounded-lg my-5'>
				<table className='w-full text-sm text-left text-gray-500 '>
					<thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
						<tr>
							<th scope='col' className='px-6 py-5'>
								Date
							</th>
							<th scope='col' className=' py-5'></th>
							<th scope='col' className=' py-5'>
								<SmallBtn
									isGrey={false}
									txt='Back'
									type='transactions'
									handleClick={onBackBtnClicked}
								/>
							</th>
						</tr>
					</thead>
					<tbody>
						{user &&
							user.transactions.map((transaction) => (
								<TransactionDataPreview
									key={transaction.timestamp}
									transaction={transaction}
								/>
							))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
