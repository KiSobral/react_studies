import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "./CurrencySelector.css";

export default class CurrencySelector extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.parentCallBack(event.target.value);
  }

  render() {
    return (
      <div className="select-sheet">
        <p> {this.props.label} </p>
        <Select
          className="currency-selector"
          displayEmpty={true}
          onChange={this.handleChange}
          variant="outlined"
        >
          <MenuItem value="AED">AED</MenuItem>
          <MenuItem value="AFN">AFN</MenuItem>
          <MenuItem value="ALL">ALL</MenuItem>
          <MenuItem value="AMD">AMD</MenuItem>
          <MenuItem value="ANG">ANG</MenuItem>
          <MenuItem value="AOA">AOA</MenuItem>
          <MenuItem value="ARS">ARS</MenuItem>
          <MenuItem value="AUD">AUD</MenuItem>
          <MenuItem value="AWG">AWG</MenuItem>
          <MenuItem value="AZN">AZN</MenuItem>
          <MenuItem value="BAM">BAM</MenuItem>
          <MenuItem value="BBD">BBD</MenuItem>
          <MenuItem value="BDT">BDT</MenuItem>
          <MenuItem value="BGN">BGN</MenuItem>
          <MenuItem value="BHD">BHD</MenuItem>
          <MenuItem value="BIF">BIF</MenuItem>
          <MenuItem value="BMD">BMD</MenuItem>
          <MenuItem value="BND">BND</MenuItem>
          <MenuItem value="BOB">BOB</MenuItem>
          <MenuItem value="BRL">BRL</MenuItem>
          <MenuItem value="BSD">BSD</MenuItem>
          <MenuItem value="BTC">BTC</MenuItem>
          <MenuItem value="BTN">BTN</MenuItem>
          <MenuItem value="BWP">BWP</MenuItem>
          <MenuItem value="BYN">BYN</MenuItem>
          <MenuItem value="BYR">BYR</MenuItem>
          <MenuItem value="BZD">BZD</MenuItem>
          <MenuItem value="CAD">CAD</MenuItem>
          <MenuItem value="CDF">CDF</MenuItem>
          <MenuItem value="CHF">CHF</MenuItem>
          <MenuItem value="CLF">CLF</MenuItem>
          <MenuItem value="CLP">CLP</MenuItem>
          <MenuItem value="CNY">CNY</MenuItem>
          <MenuItem value="COP">COP</MenuItem>
          <MenuItem value="CRC">CRC</MenuItem>
          <MenuItem value="CUC">CUC</MenuItem>
          <MenuItem value="CUP">CUP</MenuItem>
          <MenuItem value="CVE">CVE</MenuItem>
          <MenuItem value="CZK">CZK</MenuItem>
          <MenuItem value="DJF">DJF</MenuItem>
          <MenuItem value="DKK">DKK</MenuItem>
          <MenuItem value="DOP">DOP</MenuItem>
          <MenuItem value="DZD">DZD</MenuItem>
          <MenuItem value="EGP">EGP</MenuItem>
          <MenuItem value="ERN">ERN</MenuItem>
          <MenuItem value="ETB">ETB</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="FJD">FJD</MenuItem>
          <MenuItem value="FKP">FKP</MenuItem>
          <MenuItem value="GBP">GBP</MenuItem>
          <MenuItem value="GEL">GEL</MenuItem>
          <MenuItem value="GGP">GGP</MenuItem>
          <MenuItem value="GHS">GHS</MenuItem>
          <MenuItem value="GIP">GIP</MenuItem>
          <MenuItem value="GMD">GMD</MenuItem>
          <MenuItem value="GNF">GNF</MenuItem>
          <MenuItem value="GTQ">GTQ</MenuItem>
          <MenuItem value="GYD">GYD</MenuItem>
          <MenuItem value="HKD">HKD</MenuItem>
          <MenuItem value="HNL">HNL</MenuItem>
          <MenuItem value="HRK">HRK</MenuItem>
          <MenuItem value="HTG">HTG</MenuItem>
          <MenuItem value="HUF">HUF</MenuItem>
          <MenuItem value="IDR">IDR</MenuItem>
          <MenuItem value="ILS">ILS</MenuItem>
          <MenuItem value="IMP">IMP</MenuItem>
          <MenuItem value="INR">INR</MenuItem>
          <MenuItem value="IQD">IQD</MenuItem>
          <MenuItem value="IRR">IRR</MenuItem>
          <MenuItem value="ISK">ISK</MenuItem>
          <MenuItem value="JEP">JEP</MenuItem>
          <MenuItem value="JMD">JMD</MenuItem>
          <MenuItem value="JOD">JOD</MenuItem>
          <MenuItem value="JPY">JPY</MenuItem>
          <MenuItem value="KES">KES</MenuItem>
          <MenuItem value="KGS">KGS</MenuItem>
          <MenuItem value="KHR">KHR</MenuItem>
          <MenuItem value="KMF">KMF</MenuItem>
          <MenuItem value="KPW">KPW</MenuItem>
          <MenuItem value="KRW">KRW</MenuItem>
          <MenuItem value="KWD">KWD</MenuItem>
          <MenuItem value="KYD">KYD</MenuItem>
          <MenuItem value="KZT">KZT</MenuItem>
          <MenuItem value="LAK">LAK</MenuItem>
          <MenuItem value="LBP">LBP</MenuItem>
          <MenuItem value="LKR">LKR</MenuItem>
          <MenuItem value="LRD">LRD</MenuItem>
          <MenuItem value="LSL">LSL</MenuItem>
          <MenuItem value="LVL">LVL</MenuItem>
          <MenuItem value="LYD">LYD</MenuItem>
          <MenuItem value="MAD">MAD</MenuItem>
          <MenuItem value="MDL">MDL</MenuItem>
          <MenuItem value="MGA">MGA</MenuItem>
          <MenuItem value="MKD">MKD</MenuItem>
          <MenuItem value="MMK">MMK</MenuItem>
          <MenuItem value="MNT">MNT</MenuItem>
          <MenuItem value="MOP">MOP</MenuItem>
          <MenuItem value="MRO">MRO</MenuItem>
          <MenuItem value="MUR">MUR</MenuItem>
          <MenuItem value="MVR">MVR</MenuItem>
          <MenuItem value="MWK">MWK</MenuItem>
          <MenuItem value="MXN">MXN</MenuItem>
          <MenuItem value="MYR">MYR</MenuItem>
          <MenuItem value="MZN">MZN</MenuItem>
          <MenuItem value="NAD">NAD</MenuItem>
          <MenuItem value="NGN">NGN</MenuItem>
          <MenuItem value="NIO">NIO</MenuItem>
          <MenuItem value="NOK">NOK</MenuItem>
          <MenuItem value="NPR">NPR</MenuItem>
          <MenuItem value="NZD">NZD</MenuItem>
          <MenuItem value="OMR">OMR</MenuItem>
          <MenuItem value="PAB">PAB</MenuItem>
          <MenuItem value="PEN">PEN</MenuItem>
          <MenuItem value="PGK">PGK</MenuItem>
          <MenuItem value="PHP">PHP</MenuItem>
          <MenuItem value="PKR">PKR</MenuItem>
          <MenuItem value="PLN">PLN</MenuItem>
          <MenuItem value="PYG">PYG</MenuItem>
          <MenuItem value="QAR">QAR</MenuItem>
          <MenuItem value="RON">RON</MenuItem>
          <MenuItem value="RSD">RSD</MenuItem>
          <MenuItem value="RUB">RUB</MenuItem>
          <MenuItem value="RWF">RWF</MenuItem>
          <MenuItem value="SAR">SAR</MenuItem>
          <MenuItem value="SBD">SBD</MenuItem>
          <MenuItem value="SCR">SCR</MenuItem>
          <MenuItem value="SDG">SDG</MenuItem>
          <MenuItem value="SEK">SEK</MenuItem>
          <MenuItem value="SGD">SGD</MenuItem>
          <MenuItem value="SHP">SHP</MenuItem>
          <MenuItem value="SLL">SLL</MenuItem>
          <MenuItem value="SOS">SOS</MenuItem>
          <MenuItem value="SRD">SRD</MenuItem>
          <MenuItem value="STD">STD</MenuItem>
          <MenuItem value="SVC">SVC</MenuItem>
          <MenuItem value="SYP">SYP</MenuItem>
          <MenuItem value="SZL">SZL</MenuItem>
          <MenuItem value="THB">THB</MenuItem>
          <MenuItem value="TJS">TJS</MenuItem>
          <MenuItem value="TMT">TMT</MenuItem>
          <MenuItem value="TND">TND</MenuItem>
          <MenuItem value="TOP">TOP</MenuItem>
          <MenuItem value="TRY">TRY</MenuItem>
          <MenuItem value="TTD">TTD</MenuItem>
          <MenuItem value="TWD">TWD</MenuItem>
          <MenuItem value="TZS">TZS</MenuItem>
          <MenuItem value="UAH">UAH</MenuItem>
          <MenuItem value="UGX">UGX</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="UYU">UYU</MenuItem>
          <MenuItem value="UZS">UZS</MenuItem>
          <MenuItem value="VEF">VEF</MenuItem>
          <MenuItem value="VND">VND</MenuItem>
          <MenuItem value="VUV">VUV</MenuItem>
          <MenuItem value="WST">WST</MenuItem>
          <MenuItem value="XAF">XAF</MenuItem>
          <MenuItem value="XAG">XAG</MenuItem>
          <MenuItem value="XCD">XCD</MenuItem>
          <MenuItem value="XDR">XDR</MenuItem>
          <MenuItem value="XOF">XOF</MenuItem>
          <MenuItem value="XPF">XPF</MenuItem>
          <MenuItem value="YER">YER</MenuItem>
          <MenuItem value="ZAR">ZAR</MenuItem>
          <MenuItem value="ZMK">ZMK</MenuItem>
          <MenuItem value="ZMW">ZMW</MenuItem>
          <MenuItem value="ZWL">ZWL</MenuItem>
        </Select>
      </div>
    );
  }
}
