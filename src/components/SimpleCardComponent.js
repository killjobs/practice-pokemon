import React, {useEffect, useState} from "react";
import "../scss/SimpleCardComponent.scss";
import {TypeColor} from "../Common/Common.js";
import { getPokemon } from "../Services/pokemonAppServices.js";

const SimpleCardComponent = ({pokemonName, pokemonId}) =>{
    const [pokemon, setPokemon] = useState();
    const mainLevel = 0;
    const typeLevel = 1;
    
    const UpdatePokemon = () =>{
        getPokemon(pokemonId).then(res => setPokemon(res));
    };
    
    useEffect(UpdatePokemon, [pokemonId]);

    if(!pokemon) return null;

    return(
       <section className="simple-card" style={TypeColor(pokemon.types[0].type.name,mainLevel)}>
            <h1>{pokemonName}</h1>
            <section>
                <ul>
                    {
                        pokemon.types.map(types =>
                            <li 
                            style={TypeColor(pokemon.types[0].type.name,typeLevel)}
                            key={types.slot}>{types.type.name}</li>     
                        )
                    }
                </ul>
                <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemonName}/>
            </section>
       </section> 
    );
};

export default SimpleCardComponent;