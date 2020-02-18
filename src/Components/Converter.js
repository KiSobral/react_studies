import React, { Component } from "react";
import "./Converter.css";

import CurrencySelector from "./CurrencySelector";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromCurrency: "",
      fromCurrencyValue: "",
      toCurrency: "",
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
        <div className="sheet-header">
          <CurrencySelector
            parentCallBack={this.fromCurrencyCallBack}
            label="from"
          />
          <div className="justify-center">
            <b> TO </b>
          </div>
          <CurrencySelector
            parentCallBack={this.toCurrencyCallBack}
            label="to"
          />
        </div>

        <div className="sheet-body">
          <TextField
            onChange={event => {
              this.setState({ fromCurrencyValue: event.target.value });
            }}
          />
          <Button variant="outlined" onClick={this.convertCurrencies}>
            <b>CONVERT</b>
          </Button>
        </div>

        <div className="result">
          <b> $ {this.state.toCurrencyValue} </b>
        </div>
      </div>
    );
  }
}
