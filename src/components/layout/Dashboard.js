import React, { Component } from 'react';
import PokemonList from '../pokemon/PokemonList';
import Searchbar from '../search/SearchBar';
import PokemonCard from '../pokemon/PokemonCard';

export default class Dashboard extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=964',
    pokemon: null
  };
  handleChange = e => {
    if (this.state.selected !== e.value) {
      {this.state.pokemon.map(pokemon => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))} 
    }
  };
  render() {
    return (
      <React.Fragment>
        <Searchbar  onChange={this.handleChange}/>
        <PokemonList/>
      </React.Fragment>
    );
  }
}
