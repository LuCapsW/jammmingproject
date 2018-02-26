import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../trackList/trackList';

class Playlist extends Component {

  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value) //step 59
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}
/* step 61 */  onChange = {this.handleNameChange}/>
        <TrackList tracks = {this.props.playlistTracks}
/* step 51 */      onRemove = {this.props.onRemove}/>
        <a className="Playlist-save"
            onClick = {this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    )
  }
};

export default Playlist;
