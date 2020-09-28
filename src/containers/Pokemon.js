import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/pokemonActions";
import _ from "lodash";
import "../App.css";

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);
  React.useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      console.log(pokeData);
      return (
        <div className={"Card"} style={{ flex: 1, alignItems: "center" }}>
          <div className={"Card_img"}>
            <h1>Sprites</h1>
            `<img src={pokeData.sprites.front_default} alt="" />`
            <img src={pokeData.sprites.back_default} alt="" />
            <img src={pokeData.sprites.front_shiny} alt="" />
            <img src={pokeData.sprites.back_shiny} alt="" />
          </div>
          <div className="Card_types">
            <h1>Stats</h1>
            {pokeData.stats.map((pokemon, index) => {
              return (
                // <div
                //   className="card text-center mx-auto"
                //   style={{ maxWidth: "18rem" }}
                //   key={pokemon.id}
                // >
                <div className="card-header">
                  <b>
                    {pokemon.name} : {pokemon.location_area_encounters}
                  </b>
                </div>
                // </div>
              );
            })}
          </div>
          <div className="Card_info">
            <h1>Abilities</h1>
            {pokeData.abilities.map((el) => {
              return <p>{el.ability.name}</p>;
            })}
          </div>
          {`${"Weight :"}${pokeData.weight}`}
        </div>
      );
    }

    if (pokemonState.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }

    return <p>error getting pokemon</p>;
  };

  return (
    <div className="container">
      <div className="card-columns"></div>
      <h1>{pokemonName}</h1>
      {ShowData()}
    </div>
  );
};

export default Pokemon;
