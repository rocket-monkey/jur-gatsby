import React, { PureComponent } from 'react'
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react'
import styles from './styles.module.scss'

const defaultMapHeight = '252px'

const MapLoading = ({ height = defaultMapHeight }) => <div style={{ height }} />

class MapInternal extends PureComponent {
  state = {
    showingInfoWindow: false,
    activeMarker: null,
    selectedPlace: null,
  }

  render() {
    const {
      address = 'Current location',
      height = defaultMapHeight,
      zoom = 13,
      location = { lat: -34.397, lng: 150.644 },
      google,
    } = this.props
    const stylers = [
      {
        stylers: [
          {
            hue: '#8167a9',
          },
          {
            saturation: 89,
          },
        ],
      },
      {
        featureType: 'water',
        stylers: [
          {
            color: '#fff',
          },
        ],
      },
      {
        featureType: 'administrative.country',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
    ]

    return (
      <div
        className={styles.map}
        style={{
          width: '100%',
          height,
        }}
      >
        <Map
          style={{
            width: '100%',
            height,
          }}
          styles={stylers}
          initialCenter={location}
          google={google}
          zoom={zoom}
          onClick={this.onMapClicked}
        >
          <Marker
            position={location}
            onClick={this.onMarkerClick}
            name={address}
          />

          <InfoWindow
            onClose={this.onMapClicked}
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              {this.state.selectedPlace && this.state.selectedPlace.name}
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })
  }

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }
}

export default GoogleApiWrapper(() => ({
  apiKey: 'AIzaSyDteYynUBuOMTmgxhcIfUCLtQvYrvSa-WQ',
  language: 'de',
  LoadingContainer: MapLoading,
}))(MapInternal)
