import React from 'react';

import SearchBox from './SearchBox/SearchBox';
import Bouncer from './Bouncer';
//import { useSelector } from 'react-redux';

const classes = {
    header: {
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        boxShadow: "0 1px 4px rgba(255, 255, 255, 0.1), 0 0 40px rgba(0, 0, 0, 0.2) inset",
        width: "100%",
    },
    titleBox: {
        padding: "10px",
        textAlign: "center",
    },
    searchBox: {
        padding: "10px",
        textAlign: "center",
    },
}

export default function Header(){

    return (
        <div>
            <div style={classes.header}>
                <div style={classes.titleBox}>
                    <h2 style={{marginBottom: "0px", paddingBottom: "0px"}}>Food Search. That's all...</h2>
                    <Bouncer />
                </div>
                <div style={classes.searchBox}>
                    <SearchBox />
                </div>
            </div>
        </div>
    )
}