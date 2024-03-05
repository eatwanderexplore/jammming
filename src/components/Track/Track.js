import React from "react";
import './Track.css'

function Track(props) {
  function renderAction() {
    if (props.isRemoval) {
      return <button className='Track-action'>-</button>
    } else {
      return <button className='Track-action'>+</button>
    }
  }
  
  function passTrack() {
    props.onAdd(props.track);
  }

  return (
      <div className="Track">
        <div className="Track-information">
          <h3>{props.name}</h3>
          <p>{props.artist} | {props.album}</p>
        </div>
        <button className="Track-action">+</button>
      </div>
    );
}

export default Track;