import React from "react";
import "../scss/DetailCardComponent.scss";
import {TypeColor} from "../Common/Common.js";
import { Link, useParams } from 'react-router-dom';
import { UsePokemonSpecific } from "../Hooks/UsePokemonSpecific.js";

const DetailCardComponent = () => {
    const {id} = useParams();
    const {pokemonguia, UpdatePokemon} = UsePokemonSpecific(id);
    const mainLevel = 0;
    const typeLevel = 1;
    var pokemonName = "bulbasaur";
    var pokemon = {types :[
        {
            "slot": 1,
            "type": {
                "name": "grass",
                "url": "https://pokeapi.co/api/v2/type/12/"
            }
        },
        {
            "slot": 2,
            "type": {
                "name": "poison",
                "url": "https://pokeapi.co/api/v2/type/4/"
            }
        }
    ],sprites:{
        "other": {
            "dream_world": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
                "front_female": null
            },
            "home": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
                "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/female/1.png",
                "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
                "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/1.png"
            },
            "official-artwork": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
                "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
            }
        }
    }
    
};
    var pokemonNumber = "#1";
    
    return(
        <section className="specific-card">
            <section style={TypeColor(pokemon.types[0].type.name,mainLevel)}>
                <Link to ={`/`} className="specific-card-return-button">
                    Regresar
                </Link>
                <section className="specific-card-main">
                    <section className="specific-card-main-text">
                        <h1>{pokemonName}</h1>
                        <ul>
                            {
                                pokemon.types.map(types =>
                                    <li 
                                    style={TypeColor(pokemon.types[0].type.name,typeLevel)}
                                    key={types.slot}>{types.type.name}</li>     
                                )
                            }
                        </ul>
                    </section>
                    <span>{pokemonNumber}</span>
                </section>
            </section>
            <img src={pokemon.sprites.other["official-artwork"].front_default} />
            <section className="specific-card-add">
                <nav>
                    <ul>
                        <li>Detalles</li>
                        <li>Estadistica</li>
                    </ul>
                </nav>
                <section className="specific-card-add-detail">
                    <table>
                        <tbody>
                            <tr>
                                <td>Especie</td><td>Test</td>
                            </tr>
                            <tr>
                                <td>Altura</td><td>Test</td>
                            </tr>
                            <tr>
                                <td>Peso</td><td>Test</td>
                            </tr>
                            <tr>
                                <td>Hablidades</td><td>Test</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="specific-card-add-statistics">
                    <table>
                        <tbody>
                            <tr>
                                <td>Hp</td><td>####</td><td>Test</td>
                            </tr>
                            <tr>
                                <td>Attack</td><td>####</td><td>Test</td>
                            </tr>
                            <tr>
                                <td>Defense</td><td>####</td><td>Test</td>
                            </tr>
                            <tr>
                                <td>Special attack</td><td>####</td><td>Test</td>
                            </tr>
                            <tr>
                                <td>Special defense</td><td>####</td><td>Test</td>
                            </tr>
                            <tr>
                                <td>Speed</td><td>####</td><td>Test</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
        </section>
    );
};

export default DetailCardComponent;