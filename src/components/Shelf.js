import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Bottle from './Bottle';
import  {addBottle} from '../store/reducers/bottles/actions'

var nextId = 0;

const classes = {
    shelf: {
        display: "flex",
        flexDirection: "row",
    }
}

export default function Shelf(){
    const dispatch = useDispatch();
    const bottles = useSelector(state => state.bottles.items);

    const handleAddBottleClick = function(){
        dispatch(addBottle({
            id: nextId++,
            color: `rgb(${(Math.random()*255).toFixed(0)},${(Math.random()*255).toFixed(0)},${(Math.random()*255).toFixed(0)})`,
            empty: Math.random() > 0.5 ? false : true,
        }))
    }

    return (
        <div>
            <button onClick={handleAddBottleClick}>Add new Bottle</button>
            <div style={{...classes.shelf}}>
                {bottles.map(bottle => <Bottle key={bottle.id} {...bottle}></Bottle>)}
            </div>
        </div>
    )
}