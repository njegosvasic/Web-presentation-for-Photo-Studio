import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.8556,
      lng: 19.8425,
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '500px', width: '450px' }}>
        <GoogleMapReact
          
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={43.8556}
            lng={19.8425}
            text="Photo Time"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;