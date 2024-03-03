import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Tracklist from '../Tracklist/Tracklist';

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
    // Check if the track is already in the playlist
    const isTrackInPlaylist = playlistTracks.some(existingTrack => existingTrack.id === track.id);
    
    // If the track is not in the playlist, add it
    if (!isTrackInPlaylist) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  // Function to handle removing tracks from the playlist
  const removeTrackFromPlaylist = (trackId) => {
    setPlaylistTracks(playlistTracks.filter(track => track.id !== trackId));
  };

  return (
    <div>
      <h1>Ja<span className='highlight'>mmm</span>ing</h1>
      <div className="App">
      <SearchBar />
        <div className="App-playlist">
          <SearchResults
            searchResults={searchResults}
            onAddTrack={addTrackToPlaylist}
          />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;