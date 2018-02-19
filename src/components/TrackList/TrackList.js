import React from 'react';
import '.TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
  removeTrack(track) { //step 53
    this.props.onRemove(this.props.track)
  };

  render () {
    return (
      <div className="TrackList">
      {
        this.props.Tracks.map(track => {
          return <Track track={track}
                        key = {track.id}
                        onAdd = {this.props.onAdd} //step 44
                        onRemove = {this.props.onRemove}/> //step 52
        })
      }
      </div>
    )
  }
};

export default TrackList;
