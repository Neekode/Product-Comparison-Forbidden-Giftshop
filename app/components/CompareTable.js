import React from 'react';
import {CompareDetails} from './CompareDetails';
import {CompareProd} from './CompareProd';

const outsideCont = 
{
	position: "absolute"
}

const container = 
{
	position: "absolute",
	margin: "auto",	
	marginLeft: "6vw",
	marginRight: "6vw",
	top: "60vh",
	display: "block",
	float: "left",
	border: "1px solid red",
	width: "87vw",
}


export class CompareTable extends React.Component
{

	constructor(props)
	{
		super(props);

		this.state = 
		{
			containerWidth : "100%" 
		}
	}

	setWidth()
	{
		let newWidth = `${(100 / (this.props.compareProds.length + 2)) - 2}%`

		this.setState({
			containerWidth : newWidth
		}, () => {console.log(this.state.containerWidth)})

		
	}

	render()
	{
		console.log(this.props.currentEvent.innerHTML)
		
		if (this.props.currentEvent.innerHTML == "Compare")
		{
			this.setWidth();
		}


		const table = 
		(
			

            <div style={outsideCont}>
				{
					this.props.compareProds.length > 1 &&

					

					<div style={container}> 
					<CompareDetails width={this.state.containerWidth}/>
						{
							/* Because I have the array of Compared Projects dynamically changing 
								with each new render() call, each time render is called, the array
								will be Array.map()'d and render a new Component each time.
							*/
							this.props.compareProds.map((prodObjAtIndex) => 
							{
								return <CompareProd width={this.state.containerWidth} product={prodObjAtIndex} />
							})
						}
					</div>
				}
					
					
			</div>
		)

		return table;
	}
}
