import axios from "axios";

export const GetPokemonList = (page) => async dispatch => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING"
    });

    const perPage = 15;
    const offset = (page * perPage) - perPage;

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    })
  }
};
export const GetPokemonListByAbility = (page) => async dispatch => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING"
    });

    const perPage = 15;
    const offset = (page * perPage) - perPage;

    const res = await axios.get(`https://pokeapi.co/api/v2/ability?limit=${perPage}&offset=${offset}`)

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    })
  }
};
export const GetPokemonListByType = (page) => async dispatch => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING"
    });

    const perPage = 15;
    const offset = (page * perPage) - perPage;

    const res = await axios.get(`https://pokeapi.co/api/v2/type?limit=${perPage}&offset=${offset}`)

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    })
  }
};
export const GetPokemonListByColor = (page) => async dispatch => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING"
    });

    const perPage = 15;
    const offset = (page * perPage) - perPage;

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-color?limit=${perPage}&offset=${offset}`)

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    })
  }
};
export const GetPokemonListBySpecies = (page) => async dispatch => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING"
    });

    const perPage = 15;
    const offset = (page * perPage) - perPage;

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species?limit=${perPage}&offset=${offset}`)

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    })
  }
};
export const removeItem = (index) => {
  return {
    type: 'DELETE_LIST_ITEM',
    payload:index
  }
}

export const GetPokemon = (pokemon) => async dispatch => {
  try {
    dispatch({
      type: "POKEMON_MULTIPLE_LOADING"
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: "POKEMON_MULTIPLE_SUCCESS",
      payload: res.data,
      pokemonName: pokemon
    })
  } catch (e) {
    dispatch({
      type: "POKEMON_MULTIPLE_FAIL",
    })
  }
};