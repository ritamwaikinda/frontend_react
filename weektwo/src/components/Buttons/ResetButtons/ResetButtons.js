import React from "react";
import "./ResetButtons.css";

function ResetButtons() {
	return (
		<div className='reset' onClick='reset(percentage)'>
			<div className='resetCopy'>RESET</div>
		</div>
	);
}

export default ResetButtons;
