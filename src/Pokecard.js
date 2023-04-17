function Pokecard (pokemon) {
  return (
  <div>
    <h2>{pokemon.name}</h2>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name}></img>
    <p>
      Type: {pokemon.type}
    </p>
    <p>
      EXP: {pokemon.base_experience}
    </p>
  </div>
  );
}

export default Pokecard;