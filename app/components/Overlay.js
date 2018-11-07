import React from 'react';

const overlayStyle = 
{
    position: "absolute",
    top: "15vh",
    width: "100vw",
    margin: 0,
    padding: 0
};

export class Overlay extends React.Component
{

	render()
	{
		const overlay = 
		(
            <div style={overlayStyle}>
                
            </div>
		)

		return overlay;
	}
}
