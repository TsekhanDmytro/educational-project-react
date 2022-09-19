export function Character(props) {
let {character}= props;
  return (<div>
    <h2>{character.name}</h2>
    <p>Status: {character.status}</p>
    <p>Species: {character.species} </p>
    <p>Gender: {character.gender} </p>
    <img src= {character.image} alt={character.name}/>
    </div>);
}