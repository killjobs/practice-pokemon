import React from "react";
import "../scss/DetailCardComponent.scss";

const DetailCardComponent = () => {
    return(
        <section>
            <section>
                <h1>PokemonName</h1>
                <ul>
                    <li>Type 1</li>
                    <li>Type 2</li>
                </ul>
                <span>####</span>
            </section>
            <img src="" alt="PokemonName"/>
            <section>
                <nav>
                    <ul>
                        <li>Detalles</li>
                        <li>Estadistica</li>
                    </ul>
                </nav>
                <section>
                    Componentes con datos adicionales
                </section>
            </section>
        </section>
    );
};

export default DetailCardComponent;