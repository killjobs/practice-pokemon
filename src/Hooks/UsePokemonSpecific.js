import {useState , useEffect} from "react";
import {getPokemon} from "../Services/pokemonAppServices.js";

export const UsePokemonSpecific = (pokemonId) => {    
    const [pokemon, setPokemon] = useState();
    const UpdatePokemon = () =>{
        getPokemon(pokemonId).then(res => setPokemon(res));
    };
    
    useEffect(UpdatePokemon,[pokemon]);

    return {pokemon, UpdatePokemon};

};