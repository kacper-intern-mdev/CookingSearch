import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FoodCard from './FoodCard';
import LoadFoodButton from './LoadFoodButton';
import FoodDetailsModal from './FoodDetailsModal';
import { setFoodVisibility, setFoodId } from '../../store/reducers/foodDetails/actions';

// import { 
//     BrowserRouter as Router, 
//     Switch,
//     Route,
//     Link,
//     useLocation,
//     useParams,
//     useHistory,
//     } from "react-router-dom";

export default function FoodContent(){
    const dispatch = useDispatch();
    const foodArray = useSelector(state => state.search.data.items);
    const loading = useSelector(state => state.search.pending);

    const modalOn = useSelector(state => state.foodDetails.visible);

    function handleCardClick(id){
        dispatch(setFoodId(id));
        if(modalOn === false) dispatch(setFoodVisibility());
    }

    const mappedFood = foodArray.map(food => <FoodCard onClick={handleCardClick} food={food} key={food.foodId} />)

    return (
        <div>
            {modalOn && <FoodDetailsModal />}
            <div style={{textAlign: "center", marginTop: "20px"}}>
                <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gridGap: "1em", alignContent: "space-around", justifyContent: "space-between"}}>
                    {mappedFood}
                </div>
                {loading && <h3>Loading...</h3>}
                <LoadFoodButton />
            </div>
        </div>
    )
}