import Pokecard from './Pokecard';

/** Takes array of objects.
 * Returns display of pokemon cards in the DOM
 */
function Pokedex ({pokemonCards}) {
  console.log('pokemonCards', pokemonCards)
  return (
    <div className="container">
      <div className="row">
        {pokemonCards.map(p => <div className="col-lg-3 col-md-6"><Pokecard
        id={p.id}
        name={p.name}
        type={p.type}
        exp={p.base_experience} /></div>)}
      </div>
    </div>
  );
}



export default Pokedex;