import React, { useState, useEffect } from "react";
import { Pokemon } from "../components/Pokemon";
import "../styles/PokemonsPage.scss";

export const PokemonsPage = () => {
  const [search, setSearch] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [load, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=500"
  );
  const [loading, setLoading] = useState(false);

  const fetchPokemons = async () => {
    setLoading(true);
    const response = await fetch(load);
    const data = await response.json();
    if (response.ok) setLoadMore(data.results);

    const createPokemon = (results) => {
      results.forEach(async (pokemon) => {
        const pokemonResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const pokemonData = await pokemonResponse.json();
        setPokemons((currentList) => [...currentList, pokemonData]);
      });
      setLoading(false);
    };
    createPokemon(data.results);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter(
    (poke) =>
      poke.name.toLowerCase().includes(search.toLowerCase()) ||
      poke.id.toString().includes(search.toLowerCase()) ||
      poke.types[0].type.name.toString().includes(search.toLowerCase())
  );

  const pokemonList = filteredPokemons
    .sort((a, b) => (a.id > b.id ? 1 : -1))
    .map((pokemon) => (
      <>
        <Pokemon
          number={pokemon.id}
          image={pokemon.sprites.front_default}
          type={pokemon.types[0].type.name}
          name={pokemon.name}
        />
      </>
    ));

  const searchPokemon = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="pokemonsPage">
      <input
        placeholder="Search"
        type="text"
        value={search}
        onChange={searchPokemon}
      />
      {loading ? (
        <p className="loading">Loading...</p>
      ) : pokemonList.length == 0 ? (
        <p className="loading">No results found</p>
      ) : (
        <ul className="gridList">{pokemonList}</ul>
      )}
    </div>
  );
};
