import './Pokecard.css'

/** Takes a pokemon object.
 * Returns HTML for a single pokemon card.
 */
function Pokecard ({ id, name, type, exp }) {
  return (
  <div className="card Pokecard" >
    <div className="card-body">
      <h2 className="Pokecard-name">{name}</h2>
      <img className="Pokecard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}></img>
      <p className="Pokecard-type">
        Type: {type}
      </p>
      <p className="Pokecard-exp">
        EXP: {exp}
      </p>
    </div>
  </div>
  );
}

export default Pokecard;