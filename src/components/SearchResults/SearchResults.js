import React, { Component } from 'react';
import './SearchResults.css';
import TrackList from '../trackList/trackList';
import './SearchResults.css';

class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks = {this.props.searchResults}
/* step 43 */      onAdd = {this.props.onAdd}/> 
      </div>
    )
  }
};

export default SearchResults
