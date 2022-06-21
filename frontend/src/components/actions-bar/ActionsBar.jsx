import { SmallBtn } from "../buttons/SmallBtn";


export const ActionsBar = ({onSellModalClicked}) => {
	return (
		<div
			className="w-full flex justify-between rounded-md  border-gray-200"
			role="group"
		>
			<button
				type="button"
				className="inline-flex items-center py-2 px-4  text-sm font-medium text-gray-900 bg-transparent  border border-gray-900 hover:bg-gray-300 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
			>
				Transactions 
			</button>
			<button
				type="button"
				className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-300 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white "
			>
				Convert
			</button>
			<SmallBtn txt='Sell' type='sell' handleClick={onSellModalClicked} />
		</div>
	);
};
