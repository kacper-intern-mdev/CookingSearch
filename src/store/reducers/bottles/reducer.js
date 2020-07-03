import * as types from './types';

//Initial State
const init = {
    /*Bottle: {id, color, empty, updating, error}*/
    items: [],
}

//Reducer
export default function reducer(state = init, action = {}){
    switch(action.type){
        case types.ADD: return {
            ...state,
            items: [...state.items, {
                ...action.payload.bottle,
                updating: false,
                error: null,
            }],
        };
        case types.DELETE: return { 
            ...state,
            items: state.items.filter(bottle => bottle.id === action.payload.id)
        };
        case types.UPDATE_START: return {
            items: state.items.map(bottle => 
                (bottle.id === action.payload.id) 
                ? {
                    ...bottle,
                    updating: true,
                }
                : bottle
                )
        };
        case types.UPDATE_END: {
            return {
                items: state.items.map(bottle => 
                    (bottle.id === action.payload.id) 
                    ? { 
                        ...bottle, 
                        updating: false,
                        error: null,
                        empty: !bottle.empty
                    } 
                    : bottle
                    )
            }
        }
        default: return state;
    }
}