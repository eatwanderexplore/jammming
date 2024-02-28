import React from "react";

function SearchResults(props) {
    return (
        <div className="SearchResults">
          <h2>Results</h2>
          <TrackList tracks={props.searchResults} />
        </div>
      );
}

export default SearchResults;