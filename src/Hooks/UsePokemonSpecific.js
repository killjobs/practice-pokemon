import {useState , useEffect} from "react";
import {getPokemon} from "../Services/pokemonAppServices.js";

export const UsePokemonSpecific = (pokemonId) => {    
    const [pokemon, setPokemon] = useState();
    const UpdatePokemon = () =>{
        getPokemon(pokemonId).then(res => {
            console.log("Inicial",res);
            setPokemon(res);
            console.log("internal", pokemon);}
            );

        console.log("ValPokemon", pokemon);

    }
    
    useEffect(UpdatePokemon,[]);

    return {pokemon, UpdatePokemon};

};