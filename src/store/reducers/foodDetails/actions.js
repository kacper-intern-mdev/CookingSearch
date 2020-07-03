import * as types from './types';

export function setFoodId(id){
    return { type: types.SET, payload: { id }}
}
export function unsetFoodId(){
    return { type: types.UNSET }
}
export function setFoodVisibility(){
    return { type: types.VISIBLE_ON }
}
export function unsetFoodVisibility(){
    return { type: types.VISIBLE_OFF }
}