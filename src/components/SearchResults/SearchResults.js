import React, { Component } from 'react';
import './SearchResults.css';
import TrackList from '../Tracklist/TrackList';
import './SearchResults.css';

class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks = {this.props.searchResults}
                   onAdd = {this.props.onAdd}/> //step 43
      </div>
    )
  }
};

export default SearchResults
