import React from 'react';
import {CompareDetails} from './CompareDetails';
import {CompareProd} from './CompareProd';


export class CompareTable extends React.Component
{
	render()
	{
		const table = 
		(
            <div>
                <CompareDetails />
            </div>
		)

		return table;
	}
}
