import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../Tracklist/TrackList';

class Playlist extends Component {

  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value) //step 59
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}
               onChange = {this.handleNameChange}/> //step 61
        <TrackList tracks = {this.props.playlistTracks}
                   onRemove = {this.props.onRemove}/> //step 51
        <a className="Playlist-save"
            onClick = {this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    )
  }
};

export default Playlist;
