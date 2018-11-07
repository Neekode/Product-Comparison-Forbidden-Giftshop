import React from 'react';
import {Header} from './Header.js';
import {Products} from './Products.js';
// import {theProducts} from './products.js';


// My products: Artifacts from the Forbidden Giftshop
const theProducts = 
{
	chalice: () =>
	{
		return {
			name: "Chalice of Immortality",
			price: 435.56,
			description: "Drink one sip from this goblet and you will live forever.",
			stocked: true,
			img: require("../img/chalice.jpg")
		}
	},

	necro: () =>
	{
		return {
			name: "The Necronomicon",
			price: 1285.42,
			description: "Spells from all ages, giving it's user to control forces of death.",
			stocked: false,
			img: require("../img/necro.jpg")
		}
	},

	ring: () =>
	{
		return {
			name: "Ring of Chaos",
			price: 627.56,
			description: "The wearer of this ring brings chaos to the entirety of their environment.",
			stocked: true,
			img: require("../img/ring.jpg")
		}
	},

	sword: () =>
	{
		return {
			name: "Sword of Destruction",
			price: 847.22,
			description: "One swing of this blade can cut a mountain in half.",
			stocked: true,
			img: require("../img/sword.jpg")
		}
	},
	 
	
}

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