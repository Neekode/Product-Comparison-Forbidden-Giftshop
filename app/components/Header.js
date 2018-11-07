/*  Header - 
     Stateless Component
     Purpose: To display header at top of page
     Displays: "Compare Products", Hello, User
*/

import React from 'react';

const container = 
{
    border: "1px solid blue",
    position: "fixed",
    width: "100vw",
    height: "10vh",
};

const head = 
{
    border: "1px solid purple",
    width: "200px",
    height: "10vh",
};
    const headTxt = 
    {
        fontSize: "1.6em",
        margin: "2.5vw"
    };

const welcome = 
{
    border: "1px solid red",
    position: "fixed",
    width: "200px",
    height: "10vh",
    right: 0,    
    top: 0,
    fontSize: "1.2em",
    textAlign: "center",
    margin: "auto"
}
    const welcomeImg = 
    {
        maxWidth: "100%",
        maxHeight: "100%",        width: "50px"        
    }

export class Header extends React.Component
{

    render()
    {
        const header = 
        (
            <div style={container}>
                <div style={head}>
                    <h2 style={headTxt}> Product Comparator </h2>
                 </div>

                 <div style={welcome}>
                 <img style={welcomeImg} src={require('../img/user.jpg')} alt='img'/>
                    Welcome, User!
                </div>
            </div>
        )
            
        return header;
    }   
        
}