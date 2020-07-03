import * as types from './types';

export function addBottle(bottle){
    return { type: types.ADD, payload: { bottle }}
}
export function deleteBottle(id){
    return { type: types.DELETE, payload: { id }}
}
export function updateBottleStart(id){
    return {type: types.UPDATE_START, payload: { id }};
}
export function updateBottleEnd(id){
    return {type: types.UPDATE_END, payload: { id }};
}