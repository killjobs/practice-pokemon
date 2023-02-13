import React from "react";
import "../scss/SpecificCardColorComponent.scss";
import ReturnButtonComponent from "./ReturnButtonComponent.js";
import {TypeColor} from "../Common/Common.js";

const SpecificCardColorComponent = (props) => {
    const {mainType, name, types, order, image} = props.pokemonColor;
    const mainColor = `specific-card-color ${mainType}`;
    const typeLevel = 1;
    return(
        <section className={mainColor}>
            <ReturnButtonComponent/>
            <section className="specific-card-color-main">
                <section className="specific-card-color-main-text">
                    <h1>{name}</h1>
                    <ul>
                        {
                            types.map(types =>
                                <li 
                                style={TypeColor(mainType,typeLevel)}
                                key={types.slot}>{types.type.name}</li>     
                            )
                        }
                    </ul>
                </section>
                <span>{`#${order}`}</span>
            </section>
            <section className="specific-card-color-main-detail-image">
                <img src={image} alt={name}/>
            </section>
        </section>
    );
};

export default SpecificCardColorComponent;