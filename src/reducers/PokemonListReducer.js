const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
  count: 0,
};

const PokemonListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "DELETE_LIST_ITEM":
      debugger;
      return {
        data: state.data.filter((l, i) => i !== action.payload),
      };
    case "POKEMON_FILTER_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "POKEMON_FILTER_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get pokemon",
      };
    case "POKEMON_FILTER_FAIL":
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errorMsg: "",
        count: action.payload.count,
      };
    case "POKEMON_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "POKEMON_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get pokemon",
      };
    case "POKEMON_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errorMsg: "",
        count: action.payload.count,
      };
    default:
      return state;
  }
};

export default PokemonListReducer;
