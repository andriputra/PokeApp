import React, { Component } from 'react';
import logo from '../layout/assets/img/logo.png';

export default class NavBar extends Component {
  state = {
    hoverNavBar: false
  };

  hoverNavBar() {
    window.scrollY <= 0
      ? this.setState({ hoverNavBar: false })
      : this.setState({ hoverNavBar: true });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hoverNavBar.bind(this), true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hoverNavBar.bind(this), true);
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark justify-content-between fixed-top" style={
        this.state.hoverNavBar
          ? {
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
              transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
              backgroundColor: '#ef5350 !important'
            }
          : { backgroundColor: 'transparent !important' }
        }>
        <a href="#" className="navbar-brand"><img src={logo} className="text-center logo-app"/>Pokemon Library</a>
      </nav>
    );
  }
}
