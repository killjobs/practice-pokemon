import React from "react";
import "../scss/ReturnButtonComponent.scss";
import backArrow from "../assets/back-arrow-simple.svg";
import { Link } from 'react-router-dom';

const ReturnButtonComponent = () => {
    return(
        <Link to ={`/`} className="specific-card-color-return-button">
            <img src={backArrow} alt="return to main"/>
        </Link>
    );
};

export default ReturnButtonComponent;