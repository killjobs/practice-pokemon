import {useState, useEffect} from "react";
import {getPokemons} from "../Services/pokemonAppServices.js";

export const UsePokemonGeneral = () =>{
    const [listPokemons, setListPokemons] = useState();

    const UpdateListPokemons = () =>{
        getPokemons().then(res => setListPokemons(res));
    }

    useEffect(UpdateListPokemons,[]);

    return {listPokemons, UpdateListPokemons};
};