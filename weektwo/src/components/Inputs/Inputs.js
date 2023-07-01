import React from "react";
import Input from "../Input/Input";
import "./Input.css";

function Inputs({ classtwo, component, icon, iconClass }) {
	return (
		<div className={classtwo}>
			{component}
			<Input icon={icon} iconClass={iconClass} />
		</div>
	);
}

export default Inputs;
