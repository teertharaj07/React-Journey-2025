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
