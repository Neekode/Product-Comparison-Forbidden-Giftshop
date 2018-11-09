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
                    <h2 style={headerSty.headTxt}> Compare Products </h2>
                 </div>

            </div>
        )
            
        return header;
    }   
        
}