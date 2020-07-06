import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSearchedFood } from '../../../store/reducers/search/operations';
import { searchClear } from '../../../store/reducers/search/actions';

export default function Search() {
    const dispatch = useDispatch();
    const [searchVal, setSearchVal] = useState('');
    const delayRef = useRef();

    const options = useSelector(state => state.advancedSearch);
    const searchText = useSelector(state => state.search.data.text);

    useEffect(() => {
        if(searchVal.length > 0 && searchVal !== searchText){
            const delayId = setTimeout(() => {
                dispatch(searchClear());
                dispatch(getSearchedFood(searchVal));
            }, 300);

            delayRef.current = delayId;
        }

        return () => clearTimeout(delayRef.current);
    })

    return (
        <div>
            <input type="text"
             onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Search for food..."></input>
        </div>
    )
}