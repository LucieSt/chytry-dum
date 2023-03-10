import React, { useState } from "react";
import './style.css';
import './../../style.css';
import blindsOpenImg from './images/blinds-open.svg';
import blindsClosedImg from './images/blinds-closed.svg';

const Blinds = ({ blinds }) => {

	const [blindsState, setBlindsState] = useState(blinds);

	return (
		<div className="blinds">
			<div className="blinds__icon">
				<img src={blindsState === "open" ? blindsOpenImg : blindsClosedImg} />
			</div>
			<div className="blinds__name">
				Žaluzie
			</div>
			<div className="blinds__controls">
				<button className={blindsState === "open" ? "button button--active" : "button"} onClick={() => { setBlindsState("open") }}>Otevřeno</button>
				<button className={blindsState === "closed" ? "button button--active" : "button"} onClick={() => { setBlindsState("closed") }}>Zavřeno</button>
			</div>
		</div>
	)
};

export default Blinds;