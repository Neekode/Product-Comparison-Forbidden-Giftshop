import React from 'react';
import {Product} from './Product.js';

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
    constructor(props)
    {
        super(props);

        this.state = 
        {

            clicked: false,
            comparedProducts: []
        };
        
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick()
    {
        if (!this.state.clicked)
        {
            this.setState({
                clicked: true
            })
        } 
        else 
        {
            this.setState({
                clicked: false
            })
        }
        console.log(`${this.state.clicked} from parent`)
    };
   

	render()
	{
		const products = 
		(
            <div style={prodsStyle}>
                <Product onClick={this.handleClick} prod={this.props.products.chalice()} />
                <Product onClick={this.handleClick} prod={this.props.products.necro()}/>
                <Product onClick={this.handleClick} prod={this.props.products.ring()}/>
                <Product onClick={this.handleClick} prod={this.props.products.sword()}/>
            </div>
		)

		return products;
	}
}
