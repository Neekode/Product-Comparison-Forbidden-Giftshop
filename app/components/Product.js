import React from 'react';


// Styles for Product Component
    const container = 
    {
        width: "22.7vw",
        height: "40vh",
        marginLeft: "1vw",
        marginRight: "1vw",
        marginTop: "-25px",
        border: "1px solid grey",
        borderRadius: "5px",
        display: "inline",
        float: "left",
    };
        const overlay = 
        {
            position: "absolute",
            margin: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
        };
            
            const overlayBtn = 
            {
                position: "absolute",
                width: "100px",
                height: "50px",
                borderRadius: "5px",
                top: "40%",
                
                left: 0,
                right: 0,
                margin: "auto"
            };
        
        const header = 
        {
            width: "100%",
            height: "5%",
            marginTop: "10px",
            textAlign: "center",
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
            marginTop: "1vh",
            bottom: 0,
            textAlign: "center",
            padding: "1vw"
        };
            const prodDesc = 
            {
                margin: "auto",
                padding: "10px",
                paddingTop: 0,
                fontSize: "0.9em",
                textAlign: "center"
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
        this.props.onClick(product, prodSelected);

        
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
            hoverStyle = Object.assign({}, container,overlay)
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

                <h4 style={header}>{prodObj.name}</h4>

                    <img style={imgContainer} src={prodObj.img} />

                <table style={details}>
                    <tr>
                        <th>Price</th>
                        <th>Availability</th>
                        <th>Cursed Lvl</th>
                    </tr>
                    <tr>
                        <td>${prodObj.price}</td>
                        <td>{currentStock}</td>
                        <td>{prodObj.cursedScale}/10</td>
                    </tr>
                    
                </table>
                <div style={prodDesc}>
                        {prodObj.description}
                </div>
            </div>
		)

		return product;
	}
}
