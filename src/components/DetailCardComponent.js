import React, {useEffect, useState} from "react";
import "../scss/DetailCardComponent.scss";
import { useParams } from 'react-router-dom';
import { getPokemon } from "../Services/pokemonAppServices.js";
import SpecificCardDetailComponent from "./SpecificCardDetailComponent.js";
import SpecificCardStatisticComponent from "./SpecificCardStatisticComponent.js";
import SpecificCardColorComponent from "./SpecificCardColorComponent";

const DetailCardComponent = () => {
    const [pokemon, setPokemon] = useState();
    const [tab, setTab] = useState(false);
    const {id} = useParams();
    let pokemonDetail = {};
    let pokemonStatistics = {};
    let pokemonColor = {};

    useEffect(()=>{
        getPokemon(id).then(res => setPokemon(res));
    }, [id]);

    const UpdateTab = (val) =>{
        setTab(val);
    };
    
    if(!pokemon) return null;
    const ability = pokemon.abilities.map(a => a.ability.name);
    pokemonColor = {
        mainType: pokemon.types[0].type.name,
        name: pokemon.name,
        types: pokemon.types,
        order: pokemon.order,
        image: pokemon.sprites.other["official-artwork"].front_default,
    };
    pokemonDetail = {
        specie : pokemon.species.name,
        height : `${pokemon.height} cm`,
        weight : `${pokemon.weight/10} kg`,
        ability : ability.join(", "),
    };
    const stats = pokemon.stats.map(s => s.base_stat);
    pokemonStatistics = {
        mainType: pokemon.types[0].type.name,
        hp: stats[0],
        attack: stats[1],
        defense: stats[2],
        specialAttack: stats[3],
        specialDefense: stats[4],
        speed: stats[5],
    };

    return(
        <section className="specific-card">
            <SpecificCardColorComponent pokemonColor = {pokemonColor}/>
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
                    <SpecificCardDetailComponent pokemonDetail = {pokemonDetail}/>
                }
                {
                    tab &&
                    <SpecificCardStatisticComponent pokemonStatistics = {pokemonStatistics}/>
                }
                </section>
            </section>
        </section>
    );
};

export default DetailCardComponent;