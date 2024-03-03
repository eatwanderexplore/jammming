import React from "react";
import Track from "../Track/Track";

function Tracklist() {
    return (
        <div className="TrackList">
          {tracklist.map(track => <Track key={track.id} track={track} />)}
        </div>
      );
}

export default Tracklist;