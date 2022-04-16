import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export function Chart({ yValues }) {
	console.log(yValues);
    

	return (
		<>
			<Sparklines
				data={yValues}
				limit={100}
				width={200}
				height={50}
				// margin={10}
			>
				<SparklinesLine style={{ fill: 'none' }}  />
				<SparklinesSpots />
			</Sparklines>
		</>
	);
}
