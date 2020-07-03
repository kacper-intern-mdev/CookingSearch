import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNextSearchedFood } from '../../store/reducers/search/operations';

const classes = {
    buttonDiv: {
        padding: "20px"
    }
}

export default function LoadFoodButton(){
    const nextURL = useSelector(state => state.search.next);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getNextSearchedFood(nextURL));
    }

    return (
        <div style={classes.buttonDiv}>
            {nextURL && <button onClick={handleClick}>Show more</button>}
        </div>
    )
}