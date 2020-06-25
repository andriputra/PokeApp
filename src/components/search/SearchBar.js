import React, { Component } from 'react';

export default class SearchBar extends Component { 
  render() {
    return (
      <div className="search-input input-group md-form form-sm form-2 pl-0">
        <input className="form-control" 
          type="text" 
          placeholder="Search Pokemon" 
          aria-label="Search"
          onChange={this.props.onChange}/>
        <div className="input-group-append">
          <span className="input-group-text" id="search_Icon">
            <i className="icon-search"aria-hidden="true"></i>
          </span>
        </div>
      </div>
    );
  }
}