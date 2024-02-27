import React from "react";

function track() {
    return (
        <div className="Track">
          <div className="Track-information">
            <h3>{track.name}</h3>
            <p>{track.artist} | {track.album}</p>
          </div>
          <button className="Track-action">+</button>
        </div>
      );
}

export default track;