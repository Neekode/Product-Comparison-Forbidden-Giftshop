import React from 'react';

const container = 
{
    position: "relative",
    border: "1px solid grey",
    borderRadius: "5px",
    margin: 0,
    display: "block",
    float: "left"
}

    const nameCell = 
    {
        height: "5vh",
        textAlign: "center",
        fontSize: "1.3em",
        border: "1px solid grey",
    }
    const cell = 
    {
        height: "12vh",
        textAlign: "center",
        verticalAlign: "bottom",
        fontSize: "1.5em",
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
                <div style={nameCell}> </div>
                <div style={cell}> Price </div>
                <div style={cell}> Availability </div>
                <div style={cell}> Cursed Level  </div>
            </div>
		)

		return compareDetails;
	}
}
