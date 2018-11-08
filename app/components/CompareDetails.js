import React from 'react';

const detailsStyle = 
{
    position: "absolute",
    top: "55vh",
    marginLeft: "1vw",
    border: "1px solid red",
    
}
    const cellStyle = 
    {
        width: "23vw",
        height: "12vh",
        border: "1px solid purple",
        textAlign: "center",
        verticalAlign: "bottom",
        position: "relative",
        fontSize: "1.5em"
    }
    const nameCellStyle = 
    {
        height: "5vh",
        textAlign: "center",
        border: "1px solid purple",
        fontSize: "1.3em"
    }

export class CompareDetails extends React.Component
{
	render()
	{
		const compareDetails = 
		(
            <div style={detailsStyle}>
                <div style={nameCellStyle}> Product: </div>
                <div style={cellStyle}> Price: </div>
                <div style={cellStyle}> Availability: </div>
                <div style={cellStyle}> Cursed Level:  </div>
            </div>
		)

		return compareDetails;
	}
}
