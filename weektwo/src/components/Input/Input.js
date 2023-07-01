import React from "react";
import "./Input.css";
import Icon from "./Icon/Icon.js";
import TextInput from "./TextInput/TextInput.js";

function Input({ icon, iconClass, placeholder = 0 }) {
	return (
		<div className='input'>
			<Icon icon={icon} iconClass={iconClass} />
			<TextInput placeholder={placeholder} />
		</div>
	);
}

export default Input;
