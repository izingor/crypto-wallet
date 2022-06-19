export const StatusMsg = ({ processedStatus }) => {
	console.log(processedStatus)
	return (
		<>
			<div className='flex flex-col justify-center items-center'>
				{processedStatus}
			</div>
		</>
	)
}
