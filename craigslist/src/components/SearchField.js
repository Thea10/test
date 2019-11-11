import React from 'react';

const SearchField = () =>{

    return(
        <div>
            <div className="input">
                <input type="search" placeholder="Search in New Delhi"/>
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>  
        </div>
    )

}

export default SearchField;