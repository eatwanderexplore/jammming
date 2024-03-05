import React from "react";
import TrackList from "../Tracklist/Tracklist";
import './Playlist.css'

function Playlist(props) {
    return (
        <div className="Playlist">
          <h2>{props.playlistName}</h2>
          <TrackList tracks={props.playlistTracks} />
        </div>
      );
}

export default Playlist;