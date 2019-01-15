import React from 'react';
import { Route } from "react-router-dom";
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from "./pokemon_detail_container";

class PokemonIndex extends React.Component {
    
    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        const pokemonItems = this.props.pokemon.map((poke, idx) => {
          return <PokemonIndexItem key={idx} pokemon={poke} />;
        });
        return <section>
            <Route
                path="/pokemon/:pokemonId"
                component={PokemonDetailContainer}
            />
            <ul>{pokemonItems}</ul>
          </section>;
    }
}

export default PokemonIndex;
