import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unsetFoodVisibility } from '../../store/reducers/foodDetails/actions';

const classes = {
    modalBackground: {
        position: "fixed",
        left: "0",
        top: "0",
        width: "100vw",
        height: "100vh",
        backdropFilter: "blur(20px)",
        zIndex: "100",
        textAlign: "center",
        margin: "0",
        padding: "0",
        display: "grid",
    },
    modalForeground: {
        margin: "auto",
        backgroundColor: "rgba(255,255,255,0.8)",
        zIndex: "101",
        textAlign: "center",
        color: "black",
    },
    heading: {
        backgroundColor: "rgba(255,255,255,.7)",
    },
    body: {
        margin: "5% 0",
        backgroundColor: "rgba(255,255,255,.5)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gridGap: "1em", 
    },
    descChild: {
        textAlign: "center",
        display: "grid",
    },
    ingredientList: {
        listStyle: "none",
        padding: "0",
        margin: "0",
    }
}

export default function FoodDetailsModal(){
    const dispatch = useDispatch();

    const id = useSelector(state => state.foodDetails.id);
    const details = useSelector(state => state.search.data.items.filter(food => food.foodId === id)[0]);

    function handleBackgroundClick(){
        dispatch(unsetFoodVisibility());
    }

    let nutrients = [];
    for( const [key, val] of Object.entries(details.nutrients)){
        nutrients.push(<tr key={key}><td>{key}</td><td>{val.toFixed(2)}</td></tr>);
    }

    console.log(details);

    return (
        <div style={classes.modalBackground} onClick={handleBackgroundClick}>
            <div style={classes.modalForeground} onClick={(e) => {e.stopPropagation()}}>
                <div>
                    <div style={classes.heading}>
                        <h3>{details.label}</h3>
                        <p>{details.categoryLabel}</p>
                        <p>{details.category}</p>
                    </div>
                    <div style={classes.body}>
                        <div style={classes.descChild}>
                            <p>Nutrients: </p>
                            <table style={classes.descTable}>
                                <tbody>
                                    {nutrients}
                                </tbody>
                            </table>
                        </div>
                        <div style={classes.descChild}>
                            <p>Ingredients:</p>
                            { 
                            details.foodContentsLabel &&
                            <ul style={classes.ingredientList}>
                                {details.foodContentsLabel.split(';').map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                            </ul>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}