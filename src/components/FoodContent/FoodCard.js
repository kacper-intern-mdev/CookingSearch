import React from 'react';
import { placeholderImg } from '../../utils/vars';

const classes = {
    card: {
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 0, 0, 0.2) inset",
        padding: "10px",
        cursor: "pointer",
    },
    heading: {

    },
    body: {
        
    },
}

export default function FoodCard({food, onClick}){

    return (
        <div style={classes.card} onClick={() => onClick(food.foodId)}>
            <div style={classes.heading}>
                <img src={food.image || placeholderImg} style={{width: "250px", height: "150px"}}/>
            </div>
            <div style={classes.body}>
                <p>{food?.category}</p>
                <h4>{food.label}</h4>
            </div>
            { /*
            food.foodContentsLabel && 
            <ul>
                <h5>Ingredients: </h5>
            { food.foodContentsLabel.split(";").map(ingredient => <li key={ingredient}>{ingredient}</li> )}
            </ul>
            */ }
        </div>
    )
}