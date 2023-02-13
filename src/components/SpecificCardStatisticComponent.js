import React from "react";
import "../scss/SpecificCardStatisticComponent.scss";
import {TypeColor} from "../Common/Common.js";

const SpecificCardStatisticComponent = (props) =>{
    const {mainType, hp, attack, defense, specialAttack, specialDefense, speed} = props.pokemonStatistics;
    const statisticsLevel = 2;

    return(
        <section className="specific-card-add-container-statistics">
            <table>
                <tbody>
                    <tr>
                        <td>Hp</td>
                        <td>{hp}</td>
                        <td>
                            <input style={TypeColor(mainType,statisticsLevel)} 
                            type="range" min="1" max="100" value={hp} readOnly/>
                        </td>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td>{attack}</td>
                        <td>
                            <input style={TypeColor(mainType,statisticsLevel)} 
                            type="range" min="1" max="100" value={attack} readOnly/>
                        </td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td>{defense}</td>
                        <td>
                            <input style={TypeColor(mainType,statisticsLevel)} 
                            type="range" min="1" max="100" value={defense} readOnly/>
                        </td>
                    </tr>
                    <tr>
                        <td>Special attack</td>
                        <td>{specialAttack}</td>
                        <td>
                            <input style={TypeColor(mainType,statisticsLevel)} 
                            type="range" min="1" max="100" value={specialAttack} readOnly/>
                        </td>
                    </tr>
                    <tr>
                        <td>Special defense</td>
                        <td>{specialDefense}</td>
                        <td>
                            <input style={TypeColor(mainType,statisticsLevel)} 
                            type="range" min="1" max="100" value={specialDefense} readOnly/>
                        </td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>{speed}</td>
                        <td>
                            <input style={TypeColor(mainType,statisticsLevel)} 
                            type="range" min="1" max="100" value={speed} readOnly/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default SpecificCardStatisticComponent;