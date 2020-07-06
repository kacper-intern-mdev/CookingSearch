import React, { useState } from 'react';

import Search from './Search';
import SearchOptions from './SearchOptions';
import { useDispatch, useSelector } from 'react-redux';
import { setForm, toggleOptions } from '../../../store/reducers/searchOptions/actions';
import { getSearchedFood } from '../../../store/reducers/search/operations';
import { searchClear } from '../../../store/reducers/search/actions';

export default function SearchBox(){
    const dispatch = useDispatch();

    const optionState = useSelector(state => state.searchOptions);
    const searchText = useSelector(state => state.search.data.text);

    function handleOptionsChange(e){
        const formData = {
            name: e.target.name,
            value: e.target.name === "nutrition" ? e.target.checked : e.target.value,
        };
        dispatch(setForm(formData));
    }

    function handleAdvancedSearchClick(e){
        if(searchText !== ""){
            dispatch(searchClear());
            dispatch(getSearchedFood(searchText));
        }
    }

    return (
        <div>
            <Search />
            <button onClick={() => dispatch(toggleOptions())}>Advanced Options</button>
            { optionState.active && <SearchOptions {...optionState} handleChange={handleOptionsChange} handleAdvancedSearchClick={handleAdvancedSearchClick}/> }
        </div>
    )
}