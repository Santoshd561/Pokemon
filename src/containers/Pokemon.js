import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/pokemonActions";
import _ from "lodash";
import "../App.css";
import { Card, Tooltip } from 'antd';
const { Meta } = Card;

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
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Card
            className='details'
            hoverable
            cover={
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                  <img alt="example" src={pokeData.sprites.front_default} width="200" height="200" />
                  <img alt="example" src={pokeData.sprites.back_default} width="200" height="200" />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                  <img alt="example" src={pokeData.sprites.front_shiny} width="200" height="200" />
                  <img alt="example" src={pokeData.sprites.back_shiny} width="200" height="200" />
                </div>
              </div>
            }
          >
          </Card>
          <Card
            className='details'
            hoverable
          >
            <Meta title="Stats" style={{ fontSize: "24", margin: "10%" }} />
            {pokeData.stats.map((pokemon, index) => {
              return (
                <p>
                  {pokemon.base_stat} : {pokemon.effort}
                </p>
                // </div>
              );
            })}
          </Card>
          <Card
            className='details'
            hoverable
          >
            <Meta title="Abilities" style={{ fontSize: "24", margin: "10%" }} />
            {pokeData.abilities.map((el) => {
              return <p>{el.ability.name}</p>;
            })}
          </Card>
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
