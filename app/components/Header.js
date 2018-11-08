import React from 'react';
import {headerSty} from './../css/styles.css';

export class Header extends React.Component
{
    render()
    {
        const header = 
        (
            <div style={headerSty.container}>
                <div style={headerSty.head}>
                    <h2 style={headerSty.headTxt}> Product Comparison: <br /> The Forbidden Giftshop </h2>
                 </div>

                 <div style={headerSty.welcome}>
                 <img style={headerSty.welcomeImg} src={require('../img/user.jpg')} alt='img'/>
                    Welcome, User!
                </div>
            </div>
        )
            
        return header;
    }   
        
}