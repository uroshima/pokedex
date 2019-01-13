import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
    componentDidMount() {
        this.props.requestAllPokemon();
    }
    render() {
        const pokemonItems = this.props.pokemon.map((poke, idx) => {
          return <PokemonIndexItem key={idx} pokemon={poke} />;
        });
        return <section>
            <ul>{pokemonItems}</ul>
          </section>;
    }
}

export default PokemonIndex;
