import * as types from './types';

export function searchFetchPending(){
    return { type: types.FETCH_PENDING }
}
export function searchFetchSuccess(payload){
    return { type: types.FETCH_SUCCESS, payload };
}
export function searchFetchFailure(error){
    return { type: types.FETCH_FAILURE, error };
}

export function searchNextFetchSuccess(payload) {
    return { type: types.FETCH_NEXT_SUCCESS, payload };
}

export function searchClear(){
    return { type: types.CLEAR };
}