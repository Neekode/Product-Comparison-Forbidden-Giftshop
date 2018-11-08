import React from 'react';

const container = 
{
    position: "absolute",
    top: "55vh",
    marginLeft: "1vw",
    border: "1px solid grey",
    borderRadius: "5px",
}
    const nameCell = 
    {
        height: "5vh",
        textAlign: "center",
        fontSize: "1.3em"
    }
    const cell = 
    {
        width: "23vw",
        height: "12vh",
        textAlign: "center",
        verticalAlign: "bottom",
        position: "relative",
        fontSize: "1.5em",
        borderTop: "1px solid grey",
    }
    

export class CompareDetails extends React.Component
{
	render()
	{
		const compareDetails = 
		(
            <div style={container}>
                <div style={nameCell}> Product </div>
                <div style={cell}> Price </div>
                <div style={cell}> Availability </div>
                <div style={cell}> Cursed Level  </div>
            </div>
		)

		return compareDetails;
	}
}
