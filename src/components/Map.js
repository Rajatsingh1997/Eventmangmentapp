import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
} from "react-google-maps";
import Autocomplete from "react-google-autocomplete";
import handlePlaceSelecteds from "./Forms";
import SearchBox from "./Forms";
const MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCfMs0nYWjYJPJSF_-obS1biNCEwL2_Pvw&libraries=places`;

function Map(props) {
  const AsyncMap = withScriptjs(
    withGoogleMap((mapProps) => {
      return (
        <div>
          <SearchBox handlePlaceSelecteds={handlePlaceSelecteds} {...props} />
        </div>
      );
    })
  );

  return (
    <div>
      <AsyncMap
        key="0"
        googleMapURL={MAPS_URL}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div
            className="map-container h-100"
            style={{
              height: "15px",
              border: "2px solid #eee",
              zIndex: "1",
              borderRadius: "5px",
            }}
          />
        }
        mapElement={
          <div
            style={{
              height: `100%`,
              borderRadius: "13px",
              zIndex: "1",
            }}
          />
        }
        {...props}
      />
    </div>
  );
}

export default Map;
