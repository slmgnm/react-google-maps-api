// eslint-disable-next-line filenames/match-exported
import React from 'react'
import Layout from '../components/layout'
import indexStyles from './index.module.css'
import uuid from 'uuidv4'

import {
  LoadScript,
  GoogleMapProvider,
  GoogleMap,
  TrafficLayer,
  BicyclingLayer,
  // Circle,
  // Marker
  // Polyline,
  // Polygon,
  // Rectangle,
  // InfoWindow,
  // OverlayView,
  GroundOverlay
  // DirectionsRenderer,
  // FusionTablesLayer,
  // KmlLayer,

  // StreetViewPanorama,
  // compose
} from "../../../../src"

// import MapWithASearchBox from '../components/search-box'
// import PlacesWithStandaloneSearchBox from '../components/standalone-search-box'

// Past your GoogleMaps API key here
// You can obtain the API key here:
// https://developers.google.com/maps/documentation/javascript/get-api-key
import { googleMapsApiKey } from '../const'

const groundOverlayBounds = [{
  x: 233.94664370659723,
  y: 153.67749447485028
}, {
  x: 36.34117495659723,
  y: 154.66186947485028
}]

const mapBoxStyle = {
  marginTop: '2rem',
  marginBottom: '3rem'
}

const mapHeaderStyle = {
  fontSize: '1.5rem',
  marginBottom: '1.5rem'
}

const center = {
  lat: -34.397,
  lng: 150.644
}

const loadingStyle = {
  height: `100%`,
  backgroundColor: '#023456'
}

const mapContainerStyle = {
  height: `400px`,
  width: `800px`
}

const Loading = (
  <div
    style={loadingStyle}
  />
)

const loaderId = uuid()
const providerOneId = uuid()
const providerTwoId = uuid()
const providerThreeId = uuid()
const providerFourId = uuid()
// const providerFiveId = uuid()

const IndexPage = () => (
  <Layout>
    <h1>Hello People!</h1>
    <p>Welcome to React Google Maps Light Example.</p>

    <LoadScript
      id={loaderId}
      googleMapsApiKey={googleMapsApiKey}
      language={'en'}
      region={'EN'}
      version={'weekly'}
      onLoad={() => (
        console.log('script loaded')
      )}
    >
      <div style={mapBoxStyle}>
        <h2 style={mapHeaderStyle}>
          Plain Google Map
        </h2>

        <GoogleMapProvider
          id={providerOneId}
          loadingElement={Loading}
        >
          <GoogleMap
            zoom={8}
            center={center}
            mapContainerStyle={mapContainerStyle}
            mapContainerClassName={indexStyles.mapContainer}
            onClick={(...args) => {
              console.log('onClick args: ', args)
            }}
          />
        </GoogleMapProvider>
      </div>

      <div style={mapBoxStyle}>
        <h2 style={mapHeaderStyle}>
          Google Map with Traffic Layer
        </h2>

        <GoogleMapProvider
          id={providerTwoId}
          loadingElement={Loading}
        >
          <GoogleMap
            zoom={8}
            center={center}
            mapContainerStyle={mapContainerStyle}
            mapContainerClassName={indexStyles.mapContainer}
            onClick={(...args) => {
              console.log('onClick args: ', args)
            }}
          >
            <TrafficLayer />
          </GoogleMap>
        </GoogleMapProvider>
      </div>

      <div style={mapBoxStyle}>
        <h2 style={mapHeaderStyle}>
          Google Map with Bicycling Layer
        </h2>

        <GoogleMapProvider
          id={providerThreeId}
          loadingElement={Loading}
        >
          <GoogleMap
            zoom={8}
            center={center}
            mapContainerStyle={mapContainerStyle}
            mapContainerClassName={indexStyles.mapContainer}
            onClick={(...args) => {
              console.log('onClick args: ', args)
            }}
          >
            <BicyclingLayer />
          </GoogleMap>
        </GoogleMapProvider>
      </div>

      <div style={mapBoxStyle}>
        <h2 style={mapHeaderStyle}>
          Google Map with Ground Overlay
        </h2>

        <GoogleMapProvider
          id={providerFourId}
          loadingElement={Loading}
        >
          <GoogleMap
            zoom={8}
            center={center}
            mapContainerStyle={mapContainerStyle}
            mapContainerClassName={indexStyles.mapContainer}
            onClick={(...args) => {
              console.log('onClick args: ', args)
            }}
          >
            <GroundOverlay
              url='https://legacy.lib.utexas.edu/maps/historical/newark_nj_1922.jpg'
              bounds={groundOverlayBounds}
              options={{ // eslint-disable-line react-perf/jsx-no-new-object-as-prop
                clickable: true,
                opacity: 0.5
              }}
            />
          </GoogleMap>
        </GoogleMapProvider>
      </div>
    </LoadScript>
  </Layout>
)

export default IndexPage