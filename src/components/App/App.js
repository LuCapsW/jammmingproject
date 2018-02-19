import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/Searchbar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults : 'Temporary', //temporary value for searchResults
      playlistname : 'Temporary',
      playlistTracks : []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  };

  /* addTrack:
  Accepts a track argument
  Use the track's id property to check if the current song is in the playlistTracks state.
  If the id is new, add the song to the end of the playlist.
  Set the new state of the playlist */

  addTrack(track) {
    if (!this.playlistTracks.track.id) {  // Step 41
      this.setState({playlistTracks: this.playListTracks.splice(this.playListTracks.count,0,track.id)}) //add a track at the end of the playlist
    }
  };

  /* removeTrack:
  Accepts a track argument
  Uses the track's id property to filter it out of playlistTracks
  Sets the new state of the playlist
  */

  removeTrack(track) {
    if (this.playlistTracks.track.id) { //step 49
      this.setState({playListTracks: this.playlistTracks.splice(this.playListTracks.indexOf(track),1)}) //remove the track from playlist at index of given track
    }
  };

  /* updatePlaylistName:
  Accepts a name argument
  Sets the state of the playlist name to the input
  */

  updatePlaylistName(name) {
    this.setState({playlistname: name}) //step 57
  };

  savePlaylist(playListName, playListTracks) {
    //let trackURIs.join([this.playListTracks.uri]) //step 63
    Spotify.savePlaylist(playListName, playListTracks); //step 95
    playListName = 'New Playlist';
    this.searchResults = []
  };

  searchSpotify(term) {
    //console.log(term) //step 68
    Spotify.search(term).then(tracks => {     //step 88
      this.setState({searchResults: tracks});
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch = {this.searchSpotify(SearchBar.target.value)}/>
          <div className="App-playlist">
            <SearchResults searchResults = {this.state.searchResults}
                           onAdd = {this.addTrack}/> // step 42
            <Playlist playlistname = {this.state.playlistname}
                      playlistTracks = {this.state.playlistTracks}
                      onRemove = {this.removeTrack} // step 50
                      onNameChange = {this.updatePlaylistName} //step 58
                      onSave = {this.savePlaylist()} //step 64
                      />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
