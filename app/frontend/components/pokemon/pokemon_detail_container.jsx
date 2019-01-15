import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from "../../actions/pokemon_actions";

const mapStateToProps = (state, ownProps) => {
    const paramsId = ownProps.match.params.pokemonId;
    const pokemon = state.entities.pokemon[paramsId];
    return {
        pokemon: pokemon 
    };
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

