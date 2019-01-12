import React from 'react';

class PokemonIndex extends React.Component {
    componentDidMount() {
        this.props.requestAllPokemon();
    }
    render() {
        const mappedPokemons = this.props.pokemon.map((poke, idx) => {
            return (
                        <li key={idx}>
                            {poke.name}
                            {poke.image_url}
                        </li>
            )
            })
        return (
            <div>
                <ul>
                    {mappedPokemons}
                </ul>
            </div>
        )
    }
}

export default PokemonIndex;
