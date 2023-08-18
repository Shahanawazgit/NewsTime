import React, { Component } from "react";
import Hourglass from "./Hourglass.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <img src={Hourglass} alt="Hourglass" />
      </div>
    );
  }
}

export default Spinner;
