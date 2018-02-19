import React from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  };

  search(term) {
    this.props.onSearch(term) //step 69
  };

  handleTermChange(event) {
    this.setState({term: event.target.value}) //step 71
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist"
                onChange = {this.handleTermChange}  
        />
        <a>SEARCH</a>
      </div>
    )
  }
}
