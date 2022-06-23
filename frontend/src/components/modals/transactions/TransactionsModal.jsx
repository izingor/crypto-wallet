export const TransactionsModal = ({ transactions }) => {
	console.log(transactions);

	const date = (stamp) => {
		const transDate = new Date(stamp);

		return `${transDate.getDate()}/${transDate.getMonth()}/${transDate.getFullYear()}`;
	};

	return (
		<div
			id="medium-modal"
			className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full  h-modal h-full"
		>
			<div className="relative h-full w-full">
				<div className="relative  w-full inset-y-auto right-1/4 t md:w-full md:inset-x-auto bg-white rounded shadow translate-y-1/2">
					<div className="flex  justify-between items-center p-5 rounded border-b ">
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
												<td className="px-4 py-4">${transaction.usdAmount.toFixed(2)}</td>
												<td className="px-0 py-4">{transaction.coinAmount}</td>
												<td className="px-0 py-4">${transaction.coinValue}</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
