import React from 'react';
import '.Track.css';

class Track extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);

    this.removeTrack = this.removeTrack.bind(this);

  }

  renderAction() {
    if (isRemoval) {
      return <a className = "Track-action" href = '-'
                onClcik = {this.removeTrack}> //step 55
    } else {
      return <a className "Track-action" href = '+'
                onClick = {this.addTrack}> //step 47
    }
  };

  addTrack() {
    this.props.onAdd(this.props.track) // step 45
  };

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action">{this.renderAction}</a>
      </div>
    )
  }
}

export default Track ;
