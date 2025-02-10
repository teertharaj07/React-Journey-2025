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


