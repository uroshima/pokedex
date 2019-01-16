export const selectAllPokemon = (state) => (
    Object.values(state.entities.pokemon)
)

export const selectPokemonItem = (state, id) => {
    return state.entities.items[id]
}

export const selectPokeItems = (state, poke) => {
    // console.log("inside selector", poke.item_ids)
    return poke ? poke.item_ids.map(id => state.entities.items[id]) : [];
};