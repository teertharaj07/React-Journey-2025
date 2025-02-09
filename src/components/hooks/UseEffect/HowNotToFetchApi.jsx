import { useEffect, useState } from "react";
import "./Pokemon.css";


export const HowNotToFetchApi = () => {
  const [pokemon, setPokemon] = useState(null);
  const API="https://pokeapi.co/api/v2/pokemon/pikachu";
  // const API = "https://pokeapi.co/api/v2/pokemon/squirtle";

  // useEffect(()=>{
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => res.json())
  //   .then((data) =>
  //     setApiData(data))
  //   .catch((error) => console.log(error));

  // },[])

  //pokemon api

  const fetchPokemon = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(pokemon);

  if (!pokemon)
    return (
      <div>
       <h1>Loading....</h1>
      </div>
    );

  // if (pokemon) {
    return (
      <section className="container">
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                className="pokenon-image"
              />
            </figure>
            <h1>{pokemon.name}</h1>
          </li>
        </ul>
      </section>
    );
  }


// https://jsonplaceholder.typicode.com/posts
