import React from 'react';
import {Header} from './Header.js';
import {Products} from './Products.js';

// Importing the products list from my resources folder
import {theProducts} from './../rsrc/myProducts.js';

export class App extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = 
		{
			visibleProducts: [],	
		}
	}

	render()
	{
		const body = 
		(
			<div > 
				<Header />

				<Products products={theProducts}/>

				{/* Table visible={this.state.visibleProducts}*/}
				
				{/* Footer */}
			</div> 
		)

		return body;
	}
}