import React from 'react';
import {Product} from './Product.js';
// import {Overlay} from './Overay.js';

const prodsStyle = 
{
    position: "relative",
    top: "15vh",
    width: "100vw",
    margin: 0,
    padding: 0
};

export class Products extends React.Component
{

	render()
	{
		const products = 
		(
            <div style={prodsStyle}>
                <Product prod={this.props.products.chalice()} />
                <Product prod={this.props.products.necro()}/>
                <Product prod={this.props.products.ring()}/>
                <Product prod={this.props.products.sword()}/>
            </div>
		)

		return products;
	}
}
