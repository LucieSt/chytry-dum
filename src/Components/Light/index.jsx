import React, { useState } from "react";
import './style.css';
import lightOnImg from './images/light-on.svg';
import lightOffImg from './images/light-off.svg';

const Light = ({ name, state }) => {

	const [stateOfLight, setStateOfLight] = useState(state);
	const handleClick = () => stateOfLight === "on" ? setStateOfLight("off") : setStateOfLight("on");

	return (
		<div className="light" onClick={handleClick}>
			<div className="light__icon">
				<img src={stateOfLight === "on" ? lightOnImg : lightOffImg} />
			</div>
			<div className="light__name">
				{name}
			</div>
		</div>
	)
};

export default Light;