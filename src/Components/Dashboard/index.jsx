import React from "react";
import Lights from "../Lights";
import Climate from "../Climate";
import Blinds from "../Blinds";
import Energy from "../Energy";
import './style.css';

const Dashboard = ({ data }) => {

	const { lights, climate, blinds, energyConsumption } = data;

	return (
		<main className="dashboard">
			<Lights lights={lights} />
			<Climate temperature={climate.temperature} humidity={climate.humidity} />
			<Blinds blinds={blinds} />
			<Energy electricity={energyConsumption.electricity} water={energyConsumption.water} />
		</main>
	)
};

export default Dashboard;