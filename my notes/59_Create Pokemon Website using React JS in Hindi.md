****59_Create Pokemon Website using React JS in Hindi*****

Learn to build a Pokémon website using React.js, featuring a search function to find your favorite Pokémon. This comprehensive tutorial covers setting up the project, fetching data from the Pokémon API, handling loading and errors, and making the app responsive. Perfect for web developers looking to enhance their React skills with a fun project. 💸

-----------------------------------------------------------
import { useEffect } from "react"
import "./index.css"

export const Pokemon=()=>{
    const API="https://pokeapi.co/api/v2/pokemon?limit=24";



const fetchPokemon=async()=>{
  
    try {
        const res = await fetch(API)
        const data=await res.json(res);
        console.log(data);

        // const detailedPokemonData=data.results[0];
        const detailedPokemonData=data.results.map((curPokemon)=>{
            console.log(curPokemon.url);
       
            
        });
        

        // const anotherData=detailedPokemonData;
        // const anotherDataApi = await fetch(anotherData)
        // console.log(anotherDataApi);
        
        
        
    } catch (error) {
        console.log(error);
        
    }
}


    useEffect(()=>{
        fetchPokemon();
    },[])




    return (
        <>
        <h1>hello pokemon again...</h1>
        </>
    )
}



========================================


import { useEffect, useState } from "react"
import "./index.css"

export const Pokemon=()=>{
  const [pokemon,setPokemon] =useState([])


    const API="https://pokeapi.co/api/v2/pokemon?limit=24";



const fetchPokemon=async()=>{
  
    try {
        const res = await fetch(API)
        const data=await res.json(res);
        console.log(data);

        // const detailedPokemonData=data.results[0];
        const detailedPokemonData=   data.results.map(async(curPokemon)=>{
            // console.log(curPokemon.url);
            const res=await fetch(curPokemon.url);
            const data=await res.json();
            // console.log(data);
            return data;
            
            
        });
     ////all propise pending   
//  console.log(  detailedPokemonData);

 // to fullfilled the all request 
 const detailedResponses=  await Promise.all(detailedPokemonData);
 console.log(detailedResponses);

 setPokemon(detailedResponses);
       
        
        
    } catch (error) {
        console.log(error);
        
    }
}


    useEffect(()=>{
        fetchPokemon();
    },[])




    // return (
    //     <>
    //     <h1>hello pokemon again...</h1>
    //     </>
    // )


    return (
        <section className="container">
          <header>
            <h1>Lets Catch Pokemon</h1>
          </header>
          <ul className="cards">
             {
                pokemon.map((curPokemon)=>{
                    return <li key={curPokemon.id}>{curPokemon.name}</li>
                })
             }
          </ul>
        </section>
      );


}


------------------
before data coming loading state
website scalleten

export const PokemonCards = ({ pokemonData }) => {
  //   return <li>{pokemonData.name} </li>;

  return (
    <li className="pokemon-card">
      <figure>
        <img src="" alt="" />
      </figure>
    </li>
  );
};
-----------------------------
card completed
export const PokemonCards = ({ pokemonData }) => {
  //   return <li>{pokemonData.name} </li>;

  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="pokemon-image"
        />
      </figure>
      <h1 className="pokemon-name">{pokemonData.name}</h1>

      <div className="pokemon-info pokemon-highlight">
        <p>
          {pokemonData.types.map((curType) => curType.type.name).join(", ")}
        </p>
      </div> 

     <div className="grid-three-cols">
     <p className="pokemon-info">
        {/* Height: <span> {pokemonData.height} </span> */}
         <span>Height: </span> {pokemonData.height} 
      </p>
      <p className="pokemon-info">
        {/* Weight: <span> {pokemonData.weight}</span> */}
        <span>Weight:</span>
      </p>
      <p className="pokemon-info">
        {/* speed: <span>{pokemonData.stats[5].base_stat}</span> */}
        <span>   speed: </span>{pokemonData.stats[5].base_stat}
      </p>
     </div>
    

     <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{pokemonData.base_experience}</p>
          <span> Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{pokemonData.stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          <p>
            {pokemonData.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span> Abilities: </span>
        </div>
      </div>

    </li>
  );
};
---------------------
search functionality

import { useEffect, useState } from "react"
import "./index.css"
import { PokemonCards } from "./PokemonCards.jsx"

export const Pokemon=()=>{
  const [pokemon,setPokemon] =useState([])
  const [loading,setLoading] =useState(true)
  const [error,setError] =useState(null)
  const [search, setSearch] = useState("");


    // const API="https://pokeapi.co/api/v2/pokemon?limit=24";
    const API="https://pokeapi.co/api/v2/pokemon?limit=124";



const fetchPokemon=async()=>{
  
    try {
        const res = await fetch(API)
        const data=await res.json(res);
        console.log(data);

        // const detailedPokemonData=data.results[0];
        const detailedPokemonData=   data.results.map(async(curPokemon)=>{
            // console.log(curPokemon.url);
            const res=await fetch(curPokemon.url);
            const data=await res.json();
            // console.log(data);
            return data;
            
            
        });
     ////all propise pending   
//  console.log(  detailedPokemonData);

 // to fullfilled the all request 
 const detailedResponses=  await Promise.all(detailedPokemonData);
 console.log(detailedResponses);

 setPokemon(detailedResponses);
 setLoading(false);
       
        
        
    } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error)
    }
}


    useEffect(()=>{
        fetchPokemon();
    },[])




     //search functionality

  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );





// loading state
if(loading){
    return (
        <div>
            <h1>Loading....</h1>
        </div>
    );
}

if(error){
    return (
        <div>
            <h1>{error.message}</h1>
        </div>
    );
}

    return (
        <section className="container">
          <header>
            <h1>Lets Catch Pokemon</h1>
          </header>
          <div className="pokemon-search">
          <input
            type="text"
            placeholder="search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>


          <ul className="cards">
            {/* without search */}
                 {/* pokemon.map((curPokemon)=>{ */}

                    {searchData.map((curPokemon)=>{
                    // return <li key={curPokemon.id}>{curPokemon.name}</li>
                 
                        return <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
                })
             }
          </ul>
        </section>
      );


}


