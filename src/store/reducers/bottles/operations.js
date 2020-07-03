import { updateBottleStart, updateBottleEnd } from './actions';

export const updateBottleAsync = (id) => (dispatch, getState) => {
    dispatch(updateBottleStart(id));
    console.dir(getState());
    setTimeout(() => dispatch(updateBottleEnd(id)), 1000);
}