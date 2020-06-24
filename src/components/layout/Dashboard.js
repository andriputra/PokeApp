import React, { Component } from 'react';
import PokemonList from '../pokemon/PokemonList';
import Searchbar from '../search/SearchBar';;

export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Searchbar/>
        <PokemonList />
      </React.Fragment>
    );
  }
}
