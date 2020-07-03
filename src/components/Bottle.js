import React from 'react';

import { useDispatch } from 'react-redux';
import { updateBottleAsync } from '../store/reducers/bottles/operations';

const classes = {
    bottle: {
        width: "50px",
        height: "50px",
        border: "2px solid black",
        marginLeft: "10px",
        cursor: "pointer"
    },
}

export default function Bottle(props){
    const dispatch = useDispatch();

    function handleBottleClick(){
        dispatch(updateBottleAsync(props.id));
    }

    return (
        <div style={{
            ...classes.bottle,
            backgroundColor: props.color,
            opacity: props.empty ? 0.1 : 1
              }}
            title={props.empty ? "Click to fill the bottle" : "Click to drink"}
            onClick={handleBottleClick}
            >
            Bottle #{props.id}
        </div>
    )
}