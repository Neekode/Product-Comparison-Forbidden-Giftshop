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
				<div>
					{/* Because I have the array of Compared Projects dynamically changing 
						with each new render() call, each time render is called, the array
						will be Array.map()'d and render a new Component each time.
					*/
					this.props.compareProds.map((prodObjAtIndex) => 
						{
							return <CompareProd product={prodObjAtIndex} />
						})
					}
				</div>
            </div>
		)

		return table;
	}
}
