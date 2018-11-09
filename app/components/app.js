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
			tableProducts: [],	
			currentEvent: ""
		}

		this.handleClick = this.handleClick.bind(this);
	}


	handleClick(products, e)
	{
		// Then, this event handler at the top level is able to receive
		// that newly transformed array into its state as well.

		this.setState({
			tableProducts: products,
			currentEvent: e.target
		})
	}


	render()
	{
		const body = 
		(
			<div > 
				<Header />

				<Products onClick={this.handleClick} products={theProducts}/>

				<CompareTable currentEvent={this.state.currentEvent} compareProds={this.state.tableProducts}/>
				
				{/* Footer */}
			</div> 
		)

		return body;
	}
}