import React, { Component } from "react";
import "./Converter.css";

import CurrencySelector from "./CurrencySelector";

export default class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyA: "BRL",
      currencyAValue: "1",
      currencyB: "BRL",
      currencyBValue: 0
    };

    this.convertCurrencies = this.convertCurrencies.bind(this);
  }

  convertCurrencies() {
    let apiKey = "c9cce1ef9e7daffed841";
    let countries = `${this.state.currencyA}_${this.state.currencyB}`;
    let url = `https://free.currconv.com/api/v7/convert?q=${countries}&compact=ultra&apiKey=${apiKey}`;

    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(json => {
        let val = json[countries];
        let result = (val * parseFloat(this.state.currencyAValue)).toFixed(2);
        this.setState({ currencyBValue: result });

        return;
      });
  }

  render() {
    return (
      <div className="sheet">
        <CurrencySelector />
        <h4> TO </h4>
        <CurrencySelector />
        <h1> {this.state.currencyBValue} </h1>
        <button onClick={this.convertCurrencies}> Convert </button>
      </div>
    );
  }
}
