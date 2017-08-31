import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';

const defaultProps = {
  center: {lat: 16.784687, lng: 77.353460},
  zoom: 5
};

class GMap extends Component {
  render() {
    return (
      <div className='body'>
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom} />
      </div>

    );
  }
}

ReactDOM.render(<GMap/>, document.getElementById('map'));
