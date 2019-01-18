import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from "../../actions/pokemon_actions";
import { selectPokeItems } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
    const paramsId = ownProps.match.params.pokemonId;
    const pokemon = state.entities.pokemon[paramsId];
    console.log("pokemon: ", pokemon)
    console.log({
        "pokemon": pokemon,
        "items": selectPokeItems(state, pokemon)
    });
    return {
        pokemon: pokemon,
        items: selectPokeItems(state, pokemon)
    };
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

