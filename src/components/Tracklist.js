import React from "react";

function tracklist() {
    return (
        <div className="TrackList">
          {tracklist.map(track => <Track key={track.id} track={track} />)}
        </div>
      );
}

export default tracklist;