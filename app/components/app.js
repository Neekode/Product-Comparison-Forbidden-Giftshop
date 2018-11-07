// React Import
import React from 'react';
// Component Imports
import {Header} from './Header.js';
import {Products} from './Products.js';
import {CompareTable} from './CompareTable.js';

// Importing the products list from my resources folder
import {theProducts} from './../rsrc/myProducts.js';

export class App extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = 
		{
			comparedProducts: [],	
		}
	}


	render()
	{
		const body = 
		(
			<div > 
				<Header />

				<Products products={theProducts}/>

				<CompareTable />
				
				{/* Footer */}
			</div> 
		)

		return body;
	}
}