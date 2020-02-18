import React, { Component } from "react";
import "./Converter.css";

import CurrencySelector from "./CurrencySelector";

export default class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromCurrency: "BRL",
      fromCurrencyValue: "1",
      toCurrency: "BRL",
      toCurrencyValue: 0
    };

    this.convertCurrencies = this.convertCurrencies.bind(this);
    this.fromCurrencyCallBack = this.fromCurrencyCallBack.bind(this);
    this.toCurrencyCallBack = this.toCurrencyCallBack.bind(this);
  }

  fromCurrencyCallBack(childData) {
    this.setState({ fromCurrency: childData });
  }

  toCurrencyCallBack(childData) {
    this.setState({ toCurrency: childData });
  }

  convertCurrencies() {
    let apiKey = "c9cce1ef9e7daffed841";
    let countries = `${this.state.fromCurrency}_${this.state.toCurrency}`;
    let url =
      `https://free.currconv.com/api/v7/convert?q=${countries}` +
      `&compact=ultra&apiKey=${apiKey}`;

    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(json => {
        let val = json[countries];
        let res = (val * parseFloat(this.state.fromCurrencyValue)).toFixed(2);

        this.setState({ toCurrencyValue: res });

        return;
      });
  }

  render() {
    return (
      <div className="sheet">
        <CurrencySelector parentCallBack={this.fromCurrencyCallBack} />
        <h4> TO </h4>
        <CurrencySelector parentCallBack={this.toCurrencyCallBack} />
        <input
          type="text"
          onChange={event => {
            this.setState({ fromCurrencyValue: event.target.value });
          }}
        />
        <button onClick={this.convertCurrencies}> Convert </button>
        <h1> {this.state.toCurrencyValue} </h1>
      </div>
    );
  }
}
