import React from "react";

function tracklist() {
    return (
        <div className="TrackList">
          {tracks.map(track => <Track key={track.id} track={track} />)}
        </div>
      );
}

export default tracklist;