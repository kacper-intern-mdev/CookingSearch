import * as actions from './actions';

import { fetchFoodData, genericFetch } from '../../../utils/api';
/* HERE DO ADVANCED OPTIONS */
export function getSearchedFood(query) {
    return async function(dispatch, getState){
        const state = getState();
        if(state.search.data.text === query && !state.searchOptions.active ) return Promise.resolve();
        dispatch(actions.searchFetchPending());
        try {
            const res = await fetchFoodData(query, state.searchOptions.active ? state.searchOptions.values : {});
           
            const mappedRes = mapSearchedFoodToState(res);

            dispatch(actions.searchFetchSuccess(mappedRes));
        } catch (error) {
            console.log("Error in searching for food: ",error);
            dispatch(actions.searchFetchFailure(error));
        }
    }
}

export function getNextSearchedFood(query){
    return async function(dispatch){
        dispatch(actions.searchFetchPending());
        try {
            const res = await genericFetch(query);
           
            const mappedRes = mapSearchedFoodToState(res);

            dispatch(actions.searchNextFetchSuccess(mappedRes));
        } catch (error) {
            console.log("Error in searching for food: ",error);
            dispatch(actions.searchFetchFailure(error));
        }
    }
}

function mapSearchedFoodToState(res){
    const mappedRes = {
        text: res.text,
        detail: res.parsed?.[0],
        items: res.hints.map(hint => hint.food),
    }
    return { data: mappedRes, next: res._links.next.href };
}