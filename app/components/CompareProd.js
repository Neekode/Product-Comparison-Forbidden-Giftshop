import React from 'react';

const compareStyle = 
{
    position: "relative",
    top: "20vh",
    left: "25vw",

    width: "15%",
    height: "40vh",
    marginLeft: "1vw",
    marginRight: "1vw",
    marginTop: "-25px",
    border: "1px solid grey",
    borderRadius: "5px",
    display: "block",
    float: "left"
}

export class CompareProd extends React.Component
{

	render()
	{
       
		const compareProd = 
		(
            <div style={compareStyle}>
                Name: {this.props.product.name} <br /> 
                Price: {this.props.product.price} <br /> 
                Availability: {this.props.product.stocked} <br /> 
                Cursed: {this.props.product.cursedScale} <br /> 
            </div>
		)

		return compareProd;
	}
}
