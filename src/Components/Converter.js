import React, { Component } from "react";
import "./Converter.css";

import CurrencySelector from "./CurrencySelector";

export default class Converter extends Component {
  render() {
    return (
      <div className="sheet">
        <CurrencySelector></CurrencySelector>

        <h4> TO </h4>

        <CurrencySelector></CurrencySelector>
      </div>
    );
  }
}
