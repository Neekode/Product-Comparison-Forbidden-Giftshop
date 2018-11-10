import React from 'react';
import {Product} from './Product.js';

/* Notes:

On passing state between parent and child-
I was able to pass an individual child components data to by:

First, defining an event handler in the parent.
Then, passing this event handler to the child using a prop.
Then, defining an event handler in the child WHICH CALLS THE EVENT HANDLER
PASSED DOWN BY THAT PARENT THRU THAT PROP.
Using a button defined in the child, i was able to call it's own event handler,
which in effect called that of it's parent. Through this, i was able to gather
data from the child, and pass it to the parent with an argument.

Still need to work on understanding this pattern, but getting closer.

*/

const container = 
{
    position: "relative",
    top: "15vh",
    width: "100vw",
    marginLeft: "5vw",
    marginRight: "5vw",
    marginTop: "-10vh",
    padding: 0
};

export class Products extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            comparedProducts: []
        };
        
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(prodObj,selected,e)
    {
         // Now, since the argument is the Product Obj which 
        // was first passed down through props, but now being passed
        // up through event handlers, is determined by which particular
        // component's button is clicked, i can push individual
        // product objects to the comparedProducts array here.

        
        // Declaration for new comparedProds array
        let newComparedProds = [];
        
        // If the component has already been selected, it is
        // going to already be in the array. We must then look for it
        // to splice it out.
        if (selected)
        {
            for (let i = 0; i < this.state.comparedProducts.length; i++)
            {
                if (prodObj.id == this.state.comparedProducts[i].id)
                {
                    newComparedProds = this.state.comparedProducts.splice(i,1);
                }
            }

            console.log(this.state.comparedProducts)
        }
        // If it isn't, we can safely add it to the array.
        else
        {
            newComparedProds = this.state.comparedProducts;

            newComparedProds.push(prodObj);
            this.setState({
                comparedProducts: newComparedProds
            })

            console.log(this.state.comparedProducts)
        }


        // Finally, we can use this newly transformed comparedProducts array
        // inside of this components state to transfer it upwards, into the top level.
        // Where all children can access it.
        this.props.onClick(this.state.comparedProducts, e);
    };
   

	render()
	{
		const products = 
		(
            <div style={container}>
                <Product onClick={this.handleClick} prod={this.props.products.chalice()} />
                <Product onClick={this.handleClick} prod={this.props.products.necro()}/>
                <Product onClick={this.handleClick} prod={this.props.products.ring()}/>
                <Product onClick={this.handleClick} prod={this.props.products.sword()}/>
            </div>
		)

		return products;
	}
}
