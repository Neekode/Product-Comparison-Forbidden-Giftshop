import React from 'react';

const container = 
{
    position: "relative",
    margin: "auto",
    display: "block",
    float: "left",
    textAlign: "center",
    border: "1px solid grey",
    fontSize: "1.3em"
}
    const name = 
    {   height: "5vh",
        textAlign: "center",
        border: "1px solid grey",
    }
    const cell = 
    {
        height: "12vh",
        textAlign: "center",
        border: "1px solid grey",
    }
    

export class CompareProd extends React.Component
{

	render()
	{
        let flexWidth = this.props.width;
        container.width = flexWidth;

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
