import React from 'react';

import SearchBox from './SearchBox/SearchBox';
//import { useSelector } from 'react-redux';

const classes = {
    header: {
        display: "flex", 
        justifyContent: "space-evenly", 
        alignItems: "center",
        boxShadow: "0 1px 4px rgba(255, 255, 255, 0.1), 0 0 40px rgba(0, 0, 0, 0.2) inset",
        width: "100%",
    }
}

export default function Header(){

    return (
        <div>
            <div style={classes.header}>
                <h2>Food Search. That's all...</h2>
                <SearchBox />
            </div>
        </div>
    )
}