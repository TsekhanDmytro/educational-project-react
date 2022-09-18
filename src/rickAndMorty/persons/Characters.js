import {useState} from "react";
import {Character} from "./Character";

export function Characters() {
    let [arr, setArr] = useState([])
    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setArr(value.results.splice(0,6))
        })

    return  (<div>
        {arr.map(character => <Character kay={character.id}  character={character}/>)}
    </div>);
}
