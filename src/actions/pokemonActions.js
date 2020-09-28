import axios from "axios";

export const GetPokemonList = (type, name, page) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING",
    });

    const perPage = 15;
    const offset = page * perPage - perPage;

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`
    );

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    });
  }
};
export const GetPokemonListByFilter = (type, name, page) => async (
  dispatch
) => {
  try {
    dispatch({
      type: "POKEMON_FILTER_LOADING",
    });
    const perPage = 15;
    const offset = page * perPage - perPage;
    const res = await axios.get(
      `https://pokeapi.co/api/v2/${type}/${name}?limit=${perPage}&offset=${offset}`
    );

    dispatch({
      type: "POKEMON_FILTER_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_FILTER_FAIL",
    });
  }
};
export const GetPokemonListByType = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING",
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/type/${pokemon}`);
    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    });
  }
};
export const GetPokemonListByColor = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING",
    });

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-color/${pokemon}`
    );

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    });
  }
};
export const GetPokemonListBySpecies = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING",
    });

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
    );

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    });
  }
};
export const removeItem = (index) => {
  debugger;
  return {
    type: "DELETE_LIST_ITEM",
    payload: index,
  };
};
export const filterItem = (name, search) => {
  debugger;
  return {
    type: "FILTER_LIST_ITEM",
    payload: name,
    filter: search,
  };
};
export const GetPokemon = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_MULTIPLE_LOADING",
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: "POKEMON_MULTIPLE_SUCCESS",
      payload: res.data,
      pokemonName: pokemon,
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_MULTIPLE_FAIL",
    });
  }
};
