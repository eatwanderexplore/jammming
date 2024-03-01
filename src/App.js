import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  // Define state to store information
  const [searchResults, setSearchResults] = useState([
    { id: '1', name: 'Song 1', artist: 'Artist 1', album: 'Album 1' }
  ]);
  
  const [playlistName, setPlaylistName] = useState('My Playlist');

  const [playlistTracks, setPlaylistTracks] = useState([
    { id: '2', name: 'Song 2', artist: 'Artist 2', album: 'Album 2' }
  ]);

  // Function to handle changes in playlist name
  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  // Function to handle adding tracks to the playlist
  const addTrackToPlaylist = (track) => {
    setPlaylistTracks([...playlistTracks, track]);
  };

  // Function to handle removing tracks from the playlist
  const removeTrackFromPlaylist = (trackId) => {
    setPlaylistTracks(playlistTracks.filter(track => track.id !== trackId));
  };

  return (
    <div className="App">
      <h1>Jammming</h1>
      <input
        type="text"
        value={playlistName}
        onChange={handlePlaylistNameChange}
      />
      <div className="App-playlist">
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
        />
        <TrackList
          tracks={playlistTracks}
          onAddTrack={addTrackToPlaylist}
          onRemoveTrack={removeTrackFromPlaylist}
        />
      </div>
    </div>
  );
}

export default App;