import React from "react";
import Returns from "./Returns/Returns.js";
import ResetButtons from "../Buttons/ResetButtons/ResetButtons.js";
import "./Result.css";

function Result() {
	return (
		<div className='result'>
			<Returns classtwo='tip' headerCopy='Tip Amount' placeholder='$4.27' />
			<Returns classtwo='total' headerCopy='Total' placeholder='$32.79' />
			<ResetButtons />
		</div>
	);
}

export default Result;
