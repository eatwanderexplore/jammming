import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([
    { id: '1', name: 'Song 1', artist: 'Artist 1', album: 'Album 1' }
  ]);

  const [playlistTracks, setPlaylistTracks] = useState([
    { id: '2', name: 'Song 2', artist: 'Artist 2', album: 'Album 2' }
  ]);

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <div className="App-playlist">
        <SearchResults searchResults={searchResults} />
        <Playlist playlistTracks={playlistTracks} />
      </div>
      <button className="SaveToSpotifyButton">Save To Spotify</button>
      <button className="SearchButton">Search</button>
    </div>
  );
}

export default App;
