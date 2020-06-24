import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loader from '../layout/assets/img/loader.gif';

export default class PokemonCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
    imageLoading: true,
    toManyRequests: false
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png`
    this.setState({ name, imageUrl, pokemonIndex });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col">{this.state.pokemonIndex}</div>
              <div className="col">
                <h6 className="card-title">
                  {this.state.name
                    .toLowerCase()
                    .split(' ')
                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ')}
                </h6>
              </div>
            </div>
          </div>
          {this.state.imageLoading ? (
            <img src={loader} className="card-img-top mx-auto d-block mt-2"/>
          ) : null}
          <img
            className="card-img-top rounded mx-auto mt-2"
            src={this.state.imageUrl}
            onLoad={() => this.setState({ imageLoading: false })}
            onError={() => this.setState({ toManyRequests: true })}
            style={
              this.state.toManyRequests
                ? { display: 'none' }
                : this.state.imageLoading
                ? null
                : { display: 'block' }
            }
          />
          <Link className="btn" to={`pokemon/${this.state.pokemonIndex}`}>Details</Link>
        </div>
      </div>
    );
  }
}
