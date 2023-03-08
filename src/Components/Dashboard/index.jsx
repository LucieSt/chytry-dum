import React from "react";
import Lights from "../Lights";
import Climate from "../Climate";
import './style.css';

const Dashboard = ({ data }) => {

    const {lights, climate, blinds, energyConsumption} = data;


    return (
        <main className="dashboard">
            <Lights lightsData={lights}/>
            <Climate climateData={climate}/>
        </main>
    )
};

export default Dashboard;