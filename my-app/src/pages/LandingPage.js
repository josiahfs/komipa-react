import React, { Component } from "react";
import Header from "../components/Header";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props} />
      </>
    );
  }
}
