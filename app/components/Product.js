import React from 'react';

const container = 
{
    width: "22.5vw",
    height: "45vh",
    marginLeft: "1vw",
    marginRight: "1vw",
    border: "1px solid red",
    display: "inline",
    float: "left",
    transition: 'all 300ms ease-in-out'
};
    const overlay = 
    {
        position: "absolute",
        opacity: "0.6",
        margin: 0,
        backgroundColor: "rgba(0,0,0,0.6)"
    };
        const overlayBtn = 
        {

        }

    const header = 
    {
        width: "100%",
        height: "10%",
        borderBottom: "1px solid red",
        textAlign: "center",
        border: "1px solid blue",
        top: "50%"
    };
    const imgContainer = 
    {
        maxWidth: "100%",
        maxHeight: "100%",
        height: "50%",
        display: "block",
        margin: "auto"
    };
    const details = 
    {
        fontSize: "0.8em",
        width: "100%",
        bottom: 0,
        border: "1px solid black",
        textAlign: "center",
        padding: "1vw"
    };
        const detailHead = 
        {
            width: "35%",
        }




export class Product extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            hovered: false,
            selected: false,
        }

        // Binding Event handlers to this particular component instance
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
    };





    // Hover Event Handlers
        // Changes CSS styling to include fade effect
    handleMouseEnter()
    {
        this.setState({
            hovered: true
        })
    }

    handleMouseLeave()
    {
        this.setState({
            hovered: false
        })
    }

	render()
	{
        // Initializing Product Object variable in this classes scope
        const prodObj = this.props.prod;

        // Deciding to render depending on current value of "stocked" property 
        let currentStock = "";
        if (prodObj.stocked)
        {
            currentStock = "Stocked!";
        }   
        else 
        {
            currentStock = "Unstocked";
        }

        // If the state of the 'hovered' property is changed to true, due to the 
        // event handlers + listeners, the hoverStyle css object is "added" together with the container style,
        // producing an overlay effect.
        
        let hoverStyle = container;
        if (this.state.hovered)
        {
            hoverStyle = Object.assign({}, container,overlay)
        }   

            

		const product = 
		(
            <div 
                // Event Listeners
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                // Styling for Product Container
                style={container}>



                {/* On hover, the overlay div is also rendered. */}
                {
                    this.state.hovered &&
                    <div style={hoverStyle}> 
                        <button></button>
                    </div>
                }

                <h4 style={header}>{prodObj.name}</h4>

                    <img style={imgContainer} src={prodObj.img} />

                <table style={details}>
                    <tr>
                        <td>${prodObj.price}</td>
                        <td style={detailHead}>{currentStock}</td>
                    </tr>
                    <tr>
                        <td>{prodObj.description}</td>
                    </tr>
                </table>
            </div>
		)

		return product;
	}
}
