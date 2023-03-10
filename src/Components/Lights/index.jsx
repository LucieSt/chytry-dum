import React from "react";
import Light from "../Light";
import './style.css';

const Lights = ({ lights }) => {

	return (
		<main className="lights">
			{lights.map((light) => <Light key={light.name} name={light.name} state={light.state} />)}
		</main>
	)
};

export default Lights;