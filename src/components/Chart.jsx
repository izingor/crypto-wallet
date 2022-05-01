import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export function Chart({ yValues }) {
    
	return (
		<>
			<Sparklines
				data={yValues}
				limit={yValues.lenght}
				width={200}
				height={50}
			>
				<SparklinesLine style={{ fill: 'none' }}  />
				<SparklinesSpots />
			</Sparklines>
		</>
	);
}
