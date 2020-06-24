import React, { Component } from 'react';

export default class SearchBar extends Component {
  onchange = e => {
    this.setState({ search: e.target.value });
  };
  state = {
    search: ""
  };  
  render() {
    onchange = e => {
      this.setState({ search: e.target.value });
    };
    return (
      <div>
        <form className="form-inline">
          <input placeholder="Pokemon search csdcs" className="form-control mx-auto search-input" onChange={this.onchange}/>
        </form>
      </div>
    );
  }
}
