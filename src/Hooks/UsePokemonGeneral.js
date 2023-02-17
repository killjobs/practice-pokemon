import {useState, useEffect} from "react";
import {getPokemons} from "../Services/pokemonAppServices.js";

export const UsePokemonGeneral = (page, limit) =>{
    const [listPokemons, setListPokemons] = useState();

    const UpdateListPokemons = () =>{
        const offset = page*limit;
        getPokemons(offset, limit).then(res => setListPokemons(res));
    }

    useEffect(UpdateListPokemons,[]);

    return {listPokemons, UpdateListPokemons};
};