*****57:Handling Loading and Error States in React: Best Practices for Fetching Pokémon API Data*****
--------------------------------------
Master the best practices for handling loading and error states while fetching API data in React.js. This tutorial demonstrates real-world examples using Pokémon API to enhance your coding skills and ensure your app handles API requests efficiently. 💸 
==================================
 

 loding state and error state


 The message data property of an Error instance
 is a human-readable description of the error.

 error:-
 
import { useEffect, useState } from "react";
import "./Pokemon.css";

export const HowNotToFetchApi = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loding, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemons/pikachu";
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
      .then((data) =>{
         setPokemon(data);
         setLoading(false)

      })
      .catch((error) => {
        console.log(error)
        setError(error);
        setLoading(false)
      });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(pokemon);

  if (loding)
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );

  


if(error){
  return(
    <div>
      <h1>Error:{error.message}</h1>
    </div>
  )
}

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
};

// https://jsonplaceholder.typicode.com/posts





-------------------------------final code here-----
import { useEffect, useState } from "react";
import "./Pokemon.css";

export const HowNotToFetchApi = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loding, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
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
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(pokemon);

  if (loding)
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );

  if (error) {
    return (
      <div>
        <h1>Error:{error.message}</h1>
      </div>
    );
  }

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

          <div className="grid-three-cols">
            <p className="pokemon-info">
              Height: <span> {pokemon.height} </span>
            </p>
            <p className="pokemon-info">
              Weight: <span> {pokemon.weight}</span>
            </p>
            <p className="pokemon-info">
              speed: <span>{pokemon.stats[5].base_stat}</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

// https://jsonplaceholder.typicode.com/posts
