import React from 'react';

function SearchResults({ searchResults, onAddTrack }) {
  const handleAddTrack = (track) => {
    // Call the method to add track when the button is clicked
    onAddTrack(track);
  };

  return (
    <div className="SearchResults">
      <h2>Search Results</h2>
      <div className="TrackList">
        {searchResults.map(track => (
          <div className="Track" key={track.id}>
            <div className="Track-information">
              <h3>{track.name}</h3>
              <p>{track.artist} | {track.album}</p>
            </div>
            <button className="Track-action" onClick={() => handleAddTrack(track)}>+</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
