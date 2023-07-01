import React from "react";
import "./TextInput.css";

function TextInput({ placeholder }) {
	return (
		<input type='text' className='number' placeholder={placeholder}></input>
	);
}

export default TextInput;
