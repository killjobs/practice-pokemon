import React, {useEffect, useState} from "react";
import "../scss/DetailCardComponent.scss";
import {TypeColor} from "../Common/Common.js";
import { Link, useParams } from 'react-router-dom';
import { getPokemon } from "../Services/pokemonAppServices.js";

const DetailCardComponent = () => {
    const [pokemon, setPokemon] = useState();
    const [tab, setTab] = useState(false);
    const {id} = useParams();
    const mainLevel = 0;
    const typeLevel = 1;
    const statisticsLevel = 2;
    
    const UpdatePokemon = () =>{
        getPokemon(id).then(res => setPokemon(res));
    };

    useEffect(()=>{
        getPokemon(id).then(res => setPokemon(res));
    }, []);

    const UpdateTab = (val) =>{
        setTab(val);
    };

    if(!pokemon) return null;
    
    const ability = pokemon.abilities.map(a => a.ability.name);
    const stats = pokemon.stats.map(s => s.base_stat);

    return(
        <section className="specific-card">
            <section className="specific-card-color" style={TypeColor(pokemon.types[0].type.name,mainLevel)}>
                <Link to ={`/`} className="specific-card-return-button">
                    Regresar
                </Link>
                <section className="specific-card-main">
                    <section className="specific-card-main-text">
                        <h1>{pokemon.name}</h1>
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
                    <span>{`#${pokemon.order}`}</span>
                </section>
                <section className="specific-card-color-detail-image">
                    <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}/>
                </section>
            </section>
            <section className="specific-card-add">
                <section className="specific-card-add-container">
                <nav>
                    <ul>
                        <li onClick={() => UpdateTab(false)}>Detalles</li>
                        <li onClick={() => UpdateTab(true)}>Estadistica</li>
                    </ul>
                </nav>
                {
                    !tab &&
                    <section className="specific-card-add-container-detail">
                    <table>
                        <tbody>
                            <tr>
                                <td>Especie</td><td>{pokemon.species.name}</td>
                            </tr>
                            <tr>
                                <td>Altura</td><td>{`${pokemon.height} cm`}</td>
                            </tr>
                            <tr>
                                <td>Peso</td><td>{`${pokemon.weight/10} kg`}</td>
                            </tr>
                            <tr>
                                <td>Hablidades</td><td>{ability.join(", ")}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                }
                {
                    tab &&
                    <section className="specific-card-add-container-statistics">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Hp</td>
                                    <td>{stats[0]}</td>
                                    <td>
                                        <input style={TypeColor(pokemon.types[0].type.name,statisticsLevel)} type="range" min="1" max="100" value={stats[0]} readOnly/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Attack</td>
                                    <td>{stats[1]}</td>
                                    <td>
                                        <input style={TypeColor(pokemon.types[0].type.name,statisticsLevel)} type="range" min="1" max="100" value={stats[1]} readOnly/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Defense</td>
                                    <td>{stats[2]}</td>
                                    <td>
                                        <input style={TypeColor(pokemon.types[0].type.name,statisticsLevel)} type="range" min="1" max="100" value={stats[2]} readOnly/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Special_attack</td>
                                    <td>{stats[3]}</td>
                                    <td>
                                        <input style={TypeColor(pokemon.types[0].type.name,statisticsLevel)} type="range" min="1" max="100" value={stats[3]} readOnly/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Special_defense</td>
                                    <td>{stats[4]}</td>
                                    <td>
                                        <input style={TypeColor(pokemon.types[0].type.name,statisticsLevel)} type="range" min="1" max="100" value={stats[4]} readOnly/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Speed</td>
                                    <td>{stats[5]}</td>
                                    <td>
                                        <input style={TypeColor(pokemon.types[0].type.name,statisticsLevel)} type="range" min="1" max="100" value={stats[5]} readOnly/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                }
                </section>
            </section>
        </section>
    );
};

export default DetailCardComponent;