import Pokecard from './Pokecard';

function Pokedex ({pokemonCards}) {
  console.log('pokemonCards', pokemonCards)
  return (
    <div>
      {pokemonCards.map(p => Pokecard(p))}
    </div>
  );
}



export default Pokedex;