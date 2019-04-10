import React from 'react'
// import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react'
import IconGoogleMaps from '../../components/icons/GoogleMaps'
import styles from './styles.module.scss'

// const defaultMapHeight = '252px'

// const MapLoading = ({ height = defaultMapHeight }) => <div style={{ height }} />

// class MapInternal extends PureComponent {
//   state = {
//     showingInfoWindow: false,
//     activeMarker: null,
//     selectedPlace: null,
//   }

//   render() {
//     const {
//       address = 'Current location',
//       height = defaultMapHeight,
//       zoom = 13,
//       location = { lat: -34.397, lng: 150.644 },
//       google,
//     } = this.props

//     const stylers = [
//       {
//         elementType: 'geometry',
//         stylers: [
//           {
//             color: '#242f3e',
//           },
//         ],
//       },
//       {
//         elementType: 'labels.text.fill',
//         stylers: [
//           {
//             color: '#efefef',
//           },
//         ],
//       },
//       {
//         elementType: 'labels.text.stroke',
//         stylers: [
//           {
//             color: '#242f3e',
//           },
//         ],
//       },
//       {
//         featureType: 'administrative.land_parcel',
//         elementType: 'labels',
//         stylers: [
//           {
//             visibility: 'off',
//           },
//         ],
//       },
//       {
//         featureType: 'administrative.locality',
//         elementType: 'labels.text.fill',
//         stylers: [
//           {
//             color: '#efefef',
//           },
//         ],
//       },
//       {
//         featureType: 'poi',
//         elementType: 'labels.text',
//         stylers: [
//           {
//             visibility: 'off',
//           },
//         ],
//       },
//       {
//         featureType: 'poi',
//         elementType: 'labels.text.fill',
//         stylers: [
//           {
//             color: '#efefef',
//           },
//         ],
//       },
//       {
//         featureType: 'poi.park',
//         elementType: 'geometry',
//         stylers: [
//           {
//             color: '#263c3f',
//           },
//         ],
//       },
//       {
//         featureType: 'poi.park',
//         elementType: 'labels.text.fill',
//         stylers: [
//           {
//             color: '#6b9a76',
//           },
//         ],
//       },
//       {
//         featureType: 'road',
//         elementType: 'geometry',
//         stylers: [
//           {
//             color: '#38414e',
//           },
//         ],
//       },
//       {
//         featureType: 'road',
//         elementType: 'geometry.stroke',
//         stylers: [
//           {
//             color: '#212a37',
//           },
//         ],
//       },
//       {
//         featureType: 'road',
//         elementType: 'labels.text.fill',
//         stylers: [
//           {
//             color: '#9ca5b3',
//           },
//         ],
//       },
//       {
//         featureType: 'road.highway',
//         elementType: 'geometry',
//         stylers: [
//           {
//             color: '#746855',
//           },
//         ],
//       },
//       {
//         featureType: 'road.highway',
//         elementType: 'geometry.stroke',
//         stylers: [
//           {
//             color: '#1f2835',
//           },
//         ],
//       },
//       {
//         featureType: 'road.highway',
//         elementType: 'labels.text.fill',
//         stylers: [
//           {
//             color: '#f3d19c',
//           },
//         ],
//       },
//       {
//         featureType: 'road.local',
//         elementType: 'labels',
//         stylers: [
//           {
//             visibility: 'off',
//           },
//         ],
//       },
//       {
//         featureType: 'transit',
//         elementType: 'geometry',
//         stylers: [
//           {
//             color: '#2f3948',
//           },
//         ],
//       },
//       {
//         featureType: 'transit.station',
//         elementType: 'labels.text.fill',
//         stylers: [
//           {
//             color: '#d59563',
//           },
//         ],
//       },
//       {
//         featureType: 'water',
//         elementType: 'geometry',
//         stylers: [
//           {
//             color: '#17263c',
//           },
//         ],
//       },
//       {
//         featureType: 'water',
//         elementType: 'labels.text.fill',
//         stylers: [
//           {
//             color: '#515c6d',
//           },
//         ],
//       },
//       {
//         featureType: 'water',
//         elementType: 'labels.text.stroke',
//         stylers: [
//           {
//             color: '#17263c',
//           },
//         ],
//       },
//     ]

//     return (
//       <div
//         className={styles.map}
//         style={{
//           width: '100%',
//           height,
//         }}
//       >
//         <Map
//           style={{
//             width: '100%',
//             height,
//           }}
//           styles={stylers}
//           initialCenter={location}
//           google={google}
//           zoom={zoom}
//           onClick={this.onMapClicked}
//         >
//           <Marker
//             position={location}
//             onClick={this.onMarkerClick}
//             name={address}
//           />

//           <InfoWindow
//             onClose={this.onMapClicked}
//             marker={this.state.activeMarker}
//             visible={this.state.showingInfoWindow}
//           >
//             <div>
//               {this.state.selectedPlace && this.state.selectedPlace.name}
//             </div>
//           </InfoWindow>
//         </Map>
//       </div>
//     )
//   }

//   onMarkerClick = (props, marker) => {
//     this.setState({
//       selectedPlace: this.props,
//       activeMarker: marker,
//       showingInfoWindow: true,
//     })
//   }

//   onMapClicked = () => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null,
//       })
//     }
//   }
// }

// export default GoogleApiWrapper(() => ({
//   apiKey: 'AIzaSyBGpENY848xzRzdAEnVxIEHS6WMX_L-d-8',
//   language: 'de',
//   LoadingContainer: MapLoading,
// }))(MapInternal)

export default ({ location }) => (
  <div className={styles.icon}>
    <a
      href={location}
      alt="Google Maps"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconGoogleMaps />
    </a>
  </div>
)
