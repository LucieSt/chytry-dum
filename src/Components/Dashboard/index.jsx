import React from "react";
import Lights from "../Lights";
import Climate from "../Climate";
import Blinds from "../Blinds";
import Energy from "../Energy";
import './style.css';

const Dashboard = ({ data }) => {

    const {lights, climate, blinds, energyConsumption} = data;


    return (
        <main className="dashboard">
            <Lights lightsData={lights}/>
            <Climate climateData={climate}/>
            <Blinds blindsData={blinds}/>
            <Energy energyData={energyConsumption}/>
        </main>
    )
};

export default Dashboard;