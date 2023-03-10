import React, { useState } from "react";
import './style.css';
import './../../style.css';
import tempImg from './images/temp.svg';

const Climate = ({ temperature, humidity }) => {

	const [tempState, setTempState] = useState(temperature);

	return (
		<div className="climate">
			<div className="climate__icon">
				<img src={tempImg} />
			</div>
			<div className="climate__content">
				<div className="climate__temperature">{tempState}&deg;C</div>
				<div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
			</div>
			<div className="climate__controls">
				<button className="button" onClick={() => { setTempState(tempState + 1) }}>+</button>
				<button className="button" onClick={() => { setTempState(tempState - 1) }}>-</button>
			</div>
		</div>
	)
};

export default Climate;