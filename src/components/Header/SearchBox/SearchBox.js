import React, { useState } from 'react';

import Search from './Search';
import SearchOptions from './SearchOptions';

export default function SearchBox(){
    const [searchOptionsVisible, setSearchOptionsVisible] = useState(false);

    return (
        <div>
            <Search />
            <button onClick={() => setSearchOptionsVisible(current => !current)}>Advanced search</button>
            { searchOptionsVisible && <SearchOptions /> }
        </div>
    )
}