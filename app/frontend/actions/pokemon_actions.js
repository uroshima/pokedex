import * as ApiUtil from "../util/api_util";

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';

export const receiveAllPokemon = pokemon => ({ 
    type: RECEIVE_ALL_POKEMON,
    pokemon  
 });

 export const receiveSinglePokemon = payload => ({
     type: RECEIVE_SINGLE_POKEMON,
     payload 
 })

export const requestAllPokemon = () => (dispatch) => (
    ApiUtil.fetchAllPokemon()
        .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestSinglePokemon = (id) => dispatch => (
    ApiUtil.fetchSinglePokemon(id)
        .then(pokemon => dispatch(receiveSinglePokemon(pokemon)))
);

export const createPokemon = pokemon => dispatch => {
    return ApiUtil.createPokemon(pokemon).then(
        payload =>dispatch(receiveSinglePokemon(payload))
    )
};

 