import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {

  render () {
    return (
      <div className="TrackList">
      {
        this.props.tracks.map(track => {
          return <Track track={track}
                        key = {track.id}
                        onAdd = {this.props.onAdd} //step 44
                        isRemoval = {this.props.onRemove}/> //step 52
        })
      }
      </div>
    );
  }
};

export default TrackList;
