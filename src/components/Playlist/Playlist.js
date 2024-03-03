import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function Playlist(props) {
    return (
        <div className="Playlist">
          <h2>Playlist</h2>
          <TrackList tracks={props.playlistTracks} />
        </div>
      );
}

export default Playlist;