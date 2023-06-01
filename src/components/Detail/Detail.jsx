import axios from "axios"
import { useParams } from "react-router-dom"
import { useState , useEffect} from "react";
import Card from "../Card/Card";
export default function Detail () {
    const {id} = useParams;
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    const [character, setCharacter] = useState({});
    useEffect(() => {console.log(character)},[character]);
    return (
        <div>{
            character ? (<Card name = {character.name}
                status = {character.status}
                species = {character.species}
                gender = {character.gender}
                origin = {character.origin?.name}
                image = {character.image}/>) : <h1>cargando</h1>
            }
            hola
        </div>
    )
}