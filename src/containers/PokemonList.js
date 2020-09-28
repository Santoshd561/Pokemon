import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import {
  GetPokemonList,
  removeItem,
  GetPokemonListByFilter,
} from "../actions/pokemonActions";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { pokemon } from "../pokemon.jpg";
import styled from "styled-components";
import { Card, Tooltip } from "antd";
import { Select } from "antd";
import { CloseOutlined } from "@ant-design/icons";
const { Option } = Select;
const { Meta } = Card;
const PokemonList = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);
  // const [array, setArray] = useState([]);
  React.useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const removePokemon = (index) => {
    debugger;
    dispatch(removeItem(index));
  };
  console.log(pokemonList);
  const ShowData = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return (
        <>
          {pokemonList.data.map((el, i) => {
            return (
              <div className="cardItem">
                <Card
                  hoverable
                  style={{ width: 100 }}
                  cover={
                    <img
                      alt="example"
                      src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${el.name}.png`}
                    />
                  }
                  extra={
                    <div
                      style={{
                        justifyContent: "flex-end",
                        marginLeft: "160px",
                      }}
                    >
                      <CloseOutlined
                        onClick={() => {
                          removePokemon(i);
                        }}
                      />
                    </div>
                  }
                >
                  <Link to={`/pokemon/${el.name}`}>
                    <p>{el.name.toUpperCase()}</p>
                  </Link>
                </Card>
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
    <div style={{ justifyContent: "center" }}>
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

      <div
        className="container"
        style={{ padding: "5%", justifyContent: "space-between" }}
      >
        <input
          className="align-items-center"
          type="text"
          placeholder="Search "
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(GetPokemonListByFilter("ability", search, "1"))
          }
        >
          By Name
        </button>
        <button
          onClick={() =>
            dispatch(GetPokemonListByFilter("ability", search, "1"))
          }
        >
          By Ability
        </button>
        <button onClick={() => props.history.push(`/type/${search}`)}>
          By Type
        </button>
        <button onClick={() => props.history.push(`/pokemon-color/${search}`)}>
          By Color
        </button>
        <button
          onClick={() => props.history.push(`/pokemon-species/${search}`)}
        >
          By Species
        </button>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
    </div>
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
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
  }
`;
export default PokemonList;
