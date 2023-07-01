import React from "react";
import "./Icon.css";

function Icon({ icon, iconClass }) {
	return (
		<div className={`icon ${iconClass}`}>
			<img src={icon} />
		</div>
	);
}

export default Icon;
