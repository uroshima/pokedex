import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from "react-router-dom";
import PokemonIndexContainer from './pokemon/pokemon_index_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <h1>Deka si be Uckiii!</h1>
    <HashRouter>
      <Route path="/" component={PokemonIndexContainer} />
    </HashRouter>
  </Provider>
);

export default Root;