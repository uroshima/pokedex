export const selectAllPokemon = (state) => {
    let pokemons = Object.values(state.entities.pokemon);
    return pokemons;
}