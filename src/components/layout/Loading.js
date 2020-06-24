import React, { Component } from 'react';
import loader from '../layout/assets/img/loader.gif';

export default class Loading extends Component {
  render() {
    return (
      <div className="text-center">
        <h5>Getting Pokemon...</h5>
        <img src={loader} className="text-center"/>
      </div>
    );
  }
}
