import React from 'react';

const container = 
{
    position: "relative",
    margin: "auto",
    border: "1px solid grey",
    display: "block",
    float: "left",
    fontSize: "1.3em"
}

    const name = 
    {
        height: "5vh",
        textAlign: "center",
        border: "1px solid grey",
    }
    const cell = 
    {
        height: "12vh",
        textAlign: "center",
        border: "1px solid grey",

    }
    

export class CompareDetails extends React.Component
{
	render()
	{
        let flexWidth = this.props.width;
        container.width = flexWidth;

        console.log(flexWidth);

		const compareDetails = 
		(
            <div style={container}>
                <div style={name}> </div>
                <div style={cell}> Price </div>
                <div style={cell}> Availability </div>
                <div style={cell}> Cursed Level  </div>
            </div>
		)

		return compareDetails;
	}
}
