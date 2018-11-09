import React from 'react';

// Styles for Product Component
const container = 
    {
        width: "20vw",
        height: "45vh",
        marginLeft: "1vw",
        marginRight: "1vw",
        marginTop: "-5vh",
        border: "1px solid #ddd",
        borderRadius: "5px",
        display: "inline",
        float: "left",
    };        
        


        const overlay = 
        {
            position: "absolute",
            margin: 0,
            height: "30vh",
            border: "none",
            borderRadius: "5px 5px 0 0",
            backgroundColor: "rgba(24,181,141,0.8)",    
        };
            
            const overlayBtn = 
            {
                position: "absolute",
                width: "50%",
                height: "50px",
                border: "2px solid white",
                backgroundColor: "transparent",
                color: "white",
                top: "45%",
                left: 0,
                right: 0,
                margin: "auto",
            };
        
        const header = 
        {
            width: "100%",
            height: "5%",
            marginTop: "15px",
            fontSize: "1.2em",
            textAlign: "left",
            fontWeight: "bold"
        };
        const price = 
        {
            width: "100%",
            height: "5%",
            marginTop: "15px",
            fontSize: "1.1em",
            textAlign: "left",
            fontWeight: 600,
            color: "#48cfad",
            verticalAlign: "top"
            
        };
        
        const imgContainer = 
        {
            maxWidth: "85%",
            maxHeight: "85%",
            padding: "5%",
            height: "60%",
            display: "block",
            margin: "auto"
        };
        
        const details = 
        {
            width: "100%",
            padding: "1vw"
        };
            const prodDesc = 
            {
                textAlign: "left",
                fontSize: "1em"
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

        // Binding Hover Event handlers to this particular component instance
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);

        // Binding Click Handler
        this.handleClick = this.handleClick.bind(this);
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


    // Click Event Handler
        // Note: within the onClick event listener assigned in this component instance's 
        // child button, an event object is automatically passed into the event handler.
        // Here, i can take "e" as a parameter, and then play around with this event object.
        // For example. within this current "e" object, it is passed from an onClick native 
        // HTML element listener on a <button> element. When i reference e.target, it 
        // referecences the current object which is being interacted with, namely, the 
        // button element. I'm now wondering what other pieces of information this e event
        // object
    handleClick(e)
    {
        // Toggles "selected" state in this particular component instance
        if (!this.state.selected)
        {
            this.setState({
                selected: true
            })
        } 
        else 
        {
            console.log("Already In Array");
            this.setState({
                selected: false
            })
        }

        // By passing the state, which i changed through click handler down here, to the
        // passed down prop: onClick function, i am able to change the state of the parent at
        // the same time of changing the state of the child.
        
        const product = this.props.prod;
        const prodSelected = this.state.selected;
        this.props.onClick(product, prodSelected, e);
        
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
        let selectedStyle = container;

        if (this.state.hovered)
        {
            hoverStyle = Object.assign({}, container,overlay);

            
        }   
        
        if (this.state.selected)
        {
            selectedStyle = Object.assign({}, container,overlay)

            if (this.state.hovered)
            {
                hoverStyle.backgroundColor = "none";
                selectedStyle.backgroundColor = "none";
            }
        }

        // Handling Click Event in Render for Button
        // Checks current state to decide text for Comparison Button
        let btnText = "Compare";
        if (this.state.selected)
        {
            btnText = "Remove";
        }


		const product = 
		(
            <div
                // Event Listeners
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                // Styling for Product Container
                style={container}>

                    {/* Checks if selected state is true, if so it renders full overlay*/}
                {
                    this.state.selected &&
                    <div style={selectedStyle}> 

                    </div>
                }

                {
                    this.state.hovered &&
                    <div style={hoverStyle}> 
                        <button style={overlayBtn}
                                onClick={this.handleClick}>
                                {btnText}
                        </button>
                    </div>       
                }

                

                <img style={imgContainer} src={prodObj.img} />
                

                <table style={details}>
                    <tr>
                        <td style={header}>{prodObj.name}</td>
                        <td style={price}>${prodObj.price}</td>
                    </tr>
                    <tr>
                        <td style={prodDesc}>{prodObj.description}</td>
                        <td></td>
                    </tr>
                </table>
            </div>
		)

		return product;
	}
}
