import React, { Component } from "react";
import Autocomplete from "react-google-autocomplete";
export default class SearchLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handlePlaceSelected = this.handlePlaceSelected.bind(this);
  }
  handlePlaceSelected(place, input) {
    if (this.props.handlePlaceSelecteds) {
    }
  }

  render() {
    return (
      <>
        <Autocomplete
          style={{
            height: "35px",
            paddingLeft: "16px",
            marginTop: "2px",
            width: "100%",
            borderRadius: "3px",
            outline: "none",
            border: "1px",
            fontSize: "15px",

            ":focus": {
              outline: "none",
            },
            ":active": {
              outline: "none",
            },
          }}
          onChange={(e) => {
            this.setState({ address: e.target.value });
          }}
          onPlaceSelected={this.handlePlaceSelected}
          types={["(regions)"]}
        />
      </>
    );
  }
}
