import React from "react";
import "./Title.css";
import title from "../../images/splitter.png";

function Title() {
	return (
		<div className='title'>
			<img src={title} alt='splitter' />
		</div>
	);
}

export default Title;
