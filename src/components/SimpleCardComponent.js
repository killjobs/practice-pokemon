import React , {useEffect , useState} from "react";
import "../scss/SimpleCardComponent.scss";
import axios from "axios";
import {TypeColor} from "../Common/Common.js";
const SimpleCardComponent = ({pokemonName, url}) =>{
    const [pokemon, setPokemon] = useState('');
    const mainLevel = 0;
    const typeLevel = 1;
    useEffect(() => {
        getPokemon(url);
      },[]);

    const getPokemon = (url) => {
        try{
          axios.get(url)
          .then((response) => {
            setPokemon(response.data)

          });
        } catch (error) {
          console.error(error);
        }
      }
    
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