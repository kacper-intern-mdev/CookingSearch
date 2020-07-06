import React, { useState } from 'react';

const classes = {
    form: {
        display: "grid",
    },
    formElem: {
        marginBottom: "5px",
        width: "100%",
        padding: "2px",
        backgroundColor: "rgba(255,255,255,0.1)",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "3px",
    },
    label: {
        padding: "5px",
    },
    button: {
        float: "right",
        marginBottom: "10px",
    }
}

export default function SearchOptions(props){

    const { values } = props;
    
    const rangeMin = "0", rangeMax = "2000";

    return (
        <div>
            <form onChange={props.handleChange} style={classes.form}>
                <div className="formElem formCheck" style={classes.formElem}>
                    <label htmlFor="nutrition" style={classes.label}>Nutrition info: </label>
                    <input type="checkbox" name="nutrition" defaultChecked={values.nutrition}/>
                </div>

                <div className="formElem slider" style={classes.formElem}>
                    <label htmlFor="calories" style={classes.label}>Calories: {values.calories} kcal</label>
                    <input type="range" name="calories" min={rangeMin} max={rangeMax} defaultValue={values.calories}/>
                </div>
                
                <div className="formElem formSelect" style={classes.formElem}>
                    <label htmlFor="category" style={classes.label}>Category</label>
                    <select name="category" defaultValue={values.category}>
                        <option value="">All</option>
                        <option value="generic-foods">Generic Foods</option>
                        <option value="generic-meals">Generic Meals</option>
                        <option value="packaged-foods">Packaged Foods</option>
                        <option value="fast-foods">Fast Foods</option>
                    </select>
                </div>

                <div className="formElem group" style={classes.formElem}>
                    <label htmlFor="type" style={classes.label}>Type: </label>
                    <input type="radio" name="type" value="" defaultChecked={values.type === ""}/><label>All</label>
                    <input type="radio" name="type" value="foods" defaultChecked={values.type === "foods"}/><label>Foods</label>
                    <input type="radio" name="type" value="meals" defaultChecked={values.type === "meals"}/><label>Meals</label>
                </div>
            </form>
            <button onClick={props.handleAdvancedSearchClick} style={classes.button}> Search... </button>
        </div>
    )
}