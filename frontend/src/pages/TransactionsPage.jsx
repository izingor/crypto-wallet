import { useSelector } from 'react-redux';
import { user } from '../store/modules/user.store';
export const TransactionsPage = () => {
	const { transactions } = useSelector(user);
	const date = (stamp) => {
		const transDate = new Date(stamp);

		return `${transDate.getDate()}/${transDate.getMonth()}/${transDate.getFullYear()}`;
	};

	return (
		<section className=" container flex flex-col min-h-fit items-center">
			<div className="w-full relative overflow-x-auto shadow-md sm:rounded">
				<table className="w-full text-sm text-left text-gray-500 ">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
						<tr>
							<th scope="col" className="px-6 py-3">
								Date
							</th>
							<th scope="col" className="px-4 py-3">
								Coin
							</th>
							<th scope="col" className="px-4 py-3">
								Transaction value
							</th>
							<th scope="col" className="px-4 py-3">
								Coins amount
							</th>
							<th scope="col" className="px-4 py-3">
								Coin price
							</th>
						</tr>
					</thead>
					<tbody>
						{transactions &&
							transactions.map((transaction) => (
								<tr className="bg-white border-b  hover:bg-gray-50 hover:cursor-pointer">
									<th
										scope="row"
										className="px-4 py-4 font-medium text-gray-900  whitespace-nowrap flex"
									>
										{date(transaction.timestamp)}
									</th>
									<td className="px-4 py-4">{transaction.symbol}</td>
									<td className="px-4 py-4">
										${transaction.usdAmount.toFixed(2)}
									</td>
									<td className="px-0 py-4">{transaction.coinAmount}</td>
									<td className="px-0 py-4">${transaction.coinValue}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</section>
	);
};
