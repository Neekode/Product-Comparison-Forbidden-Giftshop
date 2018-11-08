import React from 'react';

const container = 
{
    position: "relative",
    width: "24.7%",
    marginLeft: "1vw",
    margin: "auto",
    display: "inline-block",
    float: "left",
    textAlign: "center",
    border: "1px solid grey",
    borderRadius: "5px",
}
    const name = 
    {
        width: "100%",
        height: "5vh",
        textAlign: "center",
        fontSize: "1.3em"
    }
    const cell = 
    {
        width: "100%",
        height: "12vh",
        textAlign: "center",
        position: "relative",
        fontSize: "1.5em",
        borderTop: "1px solid grey",
    }
    

export class CompareProd extends React.Component
{

	render()
	{
        const prodObj = this.props.product;
        let currentStock = "";
        if (prodObj.stocked)
        {
            currentStock = "Stocked!";
        }   
        else 
        {
            currentStock = "Unstocked";
        }
       
        const compareProd = 
        (
                /* Name: {this.props.product.name} <br /> 
                Price: {this.props.product.price} <br /> 
                Availability: {this.props.product.stocked} <br /> 
                Cursed: {this.props.product.cursedScale} <br />  */

                <div style={container}>
                    <div style={name}> {prodObj.name} </div>
                    <div style={cell}> ${prodObj.price} </div>
                    <div style={cell}> {currentStock} </div>
                    <div style={cell}> {prodObj.cursedScale}  </div>
                </div>
        )

		return compareProd;
	}
}
