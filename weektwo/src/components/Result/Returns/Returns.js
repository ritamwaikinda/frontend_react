import React from "react";
import Summary from "../../Summary/Summary.js";
import "./Returns.css";

function Returns({ classtwo, headerCopy, placeholder }) {
	return (
		<div className={`returns ${classtwo}`}>
			<Summary headerCopy={headerCopy} />
			<div className='amount' placeholder={placeholder}></div>
		</div>
	);
}

export default Returns;
