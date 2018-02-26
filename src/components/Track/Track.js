import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);

  }

  /* renderAction:
  displays a - anchor tag if the isRemoval property is true,
  and a + anchor tag if the isRemoval property is false.
  */

  addTrack() {
    this.props.onAdd(this.props.track) // step 45
  };

  removeTrack(track) { //step 53
    this.props.isRemoval(this.props.track)
  };

  renderAction() { //step 27
    if (this.props.isRemoval) {
      return <a className = "Track-action"
                onClick = {this.removeTrack}> - </a> //step 55
    } else {
      return <a className = "Track-action"
                onClick = {this.addTrack}> + </a> //step 47
    }
  };

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action">{this.renderAction()}</a>
      </div>
    )
  }
}

export default Track ;
