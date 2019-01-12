import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import { fetchAllPokemon } from './util/api_util';
import {
  receiveAllPokemon,
  requestAllPokemon
} from "./actions/pokemon_actions";
import { configureStore } from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    window.store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchAllPokemon = fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
    const rootEl = document.getElementById("root");
    ReactDom.render(<Root store={store}/>, rootEl);
});