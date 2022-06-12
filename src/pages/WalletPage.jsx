import { useSelector } from 'react-redux'
import { user } from '../store/modules/user.store'
import { DataDisplayRow } from '../components/DataDisplayRow'
import { DataDisplayContainer } from '../components/DataDisplayContainer'
import { DoughnutChart } from '../components/DoughnutChart'

export const WalletPage = () => {
	const activeUser = useSelector(user)
	// console.log('active user wallet', activeUser)
	// const { coins, name, usdBalance } = activeUser
	return (
		<div className='container'>
			<DataDisplayContainer
				rows={<DataDisplayRow dt={'Assets Allocation'} />}
			/>
			{activeUser && <DoughnutChart coins={activeUser.coins} />}
		</div>
	)
}
