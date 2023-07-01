import React from "react";
import "./SectionSubHeader.css";

function SectionSubHeader({ subHeaderCopy = "/ person" }) {
	return (
		<div>
			<div className='sectionSubHeader'>{subHeaderCopy}</div>
		</div>
	);
}

export default SectionSubHeader;
