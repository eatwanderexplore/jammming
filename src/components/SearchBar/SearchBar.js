import React from 'react';
import './SearchBar.css'

function SearchBar() {
    return (
        <div className="SearchBar">
          <input name='searchBar' type='text' placeholder="Enter A Song, Album, or Artist" />
        </div>
      );
}

export default SearchBar;