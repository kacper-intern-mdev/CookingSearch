import * as types from './types';

const init = {
    active: false,
    values: {
        nutrition: false, //null or "logging"
        calories: "500", //Max calories
        category: "", //null, generic-foods, generic-meals, packaged-foods, fast-foods
        type: "", //null(All), food, meal
    },
}

export default function reducer(state = init, action){
    switch (action.type) {
        case types.setForm: return {
            ...state,
            values: {
                ...state.values,
                [action.payload.name]: action.payload.value,
            }
        };
        case types.toggleOptions: return {
            ...state,
            active: !state.active,
        }
    
        default: return state;
    }
}