import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/pokemonActions";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { pokemon } from "../pokemon.jpg";
import styled from "styled-components";

const PokemonList = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);
  React.useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const removeTodo = (name) => {
    debugger;
    pokemonList.data.filter((el) => el !== name);
  };
  console.log(pokemonList);
  const ShowData = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return (
        <>
          {pokemonList.data.map((el) => {
            return (
              <div className="card">
                <p>{el.name.toUpperCase()}</p>
                <button
                  onClick={() => {
                    removeTodo(el.name);
                  }}
                  key={el}
                >
                  x
                </button>
                <div className="img-container p-5">
                  <Link to={`/pokemon/${el.name}`}>
                    <img
                      style={{ width: 200, height: 200 }}
                      src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${el.name}.png`}
                    />{" "}
                  </Link>
                </div>
              </div>
            );
          })}
        </>
      );
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };

  return (
    <>
      <NavWrapper>
        <img
          src={pokemon}
          alt="logo"
          style={{ width: 80, height: 80 }}
          className="navbar-brand"
        />
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">Pokemon Api</li>
        </ul>
      </NavWrapper>
      <div>
        <div className="py=5">
          <div className="container">
            <input
              className="align-items-center"
              type="text"
              placeholder="Search Pokemons"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => props.history.push(`/pokemon/${search}`)}>
              Search
            </button>
          </div>
          <Pokemon className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="container">
              {ShowData()}

              {!_.isEmpty(pokemonList.data) && (
                <ReactPaginate
                  pageCount={Math.ceil(pokemonList.count / 15)}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={1}
                  onPageChange={(data) => FetchData(data.selected + 1)}
                  containerClassName={"pagination"}
                />
              )}
            </div>
          </Pokemon>
        </div>
      </div>
    </>
  );
};

const NavWrapper = styled.nav`
  background: "blue" !important;
  font-size: 1.3rem !important;
  text-transform: capitalize;
`;

const Pokemon = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
  }
`;
export default PokemonList;
