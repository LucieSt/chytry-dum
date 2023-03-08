import React from "react";
import Light from "../Light";
import './style.css';

const Lights = ({ lightsData }) => {

    return (
        <main className="lights">
            {lightsData.map((light) => <Light key={light.name} oneLight={light}/>)}
        </main>
    )
};

export default Lights;