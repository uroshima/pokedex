import React from 'react';

class PokemonDetail extends React.Component {
    
    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
          this.props.requestSinglePokemon(this.props.match.params.pokemonId);
        }
    }
    
    render() {
        const { pokemon } = this.props;

        if (!pokemon) return null;

        return <div>
            <figure>
                <img src={pokemon.image_url} alt={pokemon.name} />
            </figure>
            <ul>
                <li>
                    <h2>{pokemon.name}</h2>
                </li>
              <li>{pokemon.defense}</li>
              <li>{pokemon.attack}</li>
            </ul>
          </div>;
    }
}

export default PokemonDetail;

