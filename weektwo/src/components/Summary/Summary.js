import React from "react";
import SectionHeader from "./SectionHeader/SectionHeader";
import SectionSubHeader from "./SectionSubHeader/SectionSubHeader";
import "./Summary.css";

function Summary({ headerCopy, subHeaderCopy }) {
	return (
		<div className='summary'>
			<SectionHeader headerCopy={headerCopy} />
			<SectionSubHeader subHeaderCopy={subHeaderCopy} />
		</div>
	);
}

export default Summary;
