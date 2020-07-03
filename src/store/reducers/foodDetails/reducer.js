import * as types from './types';

const init = {
    visible: false,
    id: null,
}

export default function reducer(state = init, action){
    switch (action.type) {
        case types.SET: return {
            ...state,
            id: action.payload.id
        };
        case types.UNSET: return {
            ...state,
            id: null,
        };
        case types.VISIBLE_ON: return {
            ...state,
            visible: true,
        };
        case types.VISIBLE_OFF: return {
            ...state,
            visible: false,
        }
        default: return state;
    }
}