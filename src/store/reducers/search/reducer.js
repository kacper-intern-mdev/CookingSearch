import * as types from './types';

const init = {
    data: {
        text: "",
        items: [],
    },
    next: "",
    pending: false,
    error: null,
}

export default function reducer(state = init, action){
    console.log(action);
    switch(action.type){
        case types.FETCH_PENDING: return {
            ...state,
            pending: true,
        };
        case types.FETCH_SUCCESS: return {
            ...state,
            data: action.payload.data,
            pending: false,
            error: null,
            next: action.payload.next,
        };
        case types.FETCH_FAILURE: return {
            ...state,
            pending: false,
            error: action.error,
        };
        case types.FETCH_NEXT_SUCCESS: return {
            ...state,
            data: {
                ...state.data,
                items: [...state.data.items, ...action.payload.data.items],
            },
            pending: false,
            error: null,
            next: action.payload.next,
        };
        case types.CLEAR: return {...init};
        default: return state;
    }
}