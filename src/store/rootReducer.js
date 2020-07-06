import { combineReducers } from 'redux'

import bottles from './reducers/bottles/reducer';
import search from './reducers/search/reducer';
import searchOptions from './reducers/searchOptions/reducer';
import foodDetails from './reducers/foodDetails/reducer';

const rootReducer = combineReducers({bottles, search, searchOptions, foodDetails});

export default rootReducer;