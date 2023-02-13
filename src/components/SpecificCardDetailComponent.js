import React from "react";
import "../scss/SpecificCardDetailComponent.scss";
const SpecificCardDetailComponent = (props) => {
    const {specie, height, weight, ability} = props.pokemonDetail;
    return(
        <section className="specific-card-add-container-detail">
            <table>
                <tbody>
                    <tr>
                        <td>Especie</td><td>{specie}</td>
                    </tr>
                    <tr>
                        <td>Altura</td><td>{height}</td>
                    </tr>
                    <tr>
                        <td>Peso</td><td>{weight}</td>
                    </tr>
                    <tr>
                        <td>Hablidades</td><td>{ability}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default SpecificCardDetailComponent;