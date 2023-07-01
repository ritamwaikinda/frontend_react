import React from "react";
import SectionHeader from "../Summary/SectionHeader/SectionHeader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./PeopleVerifier.css";

function PeopleVerifier() {
	return (
		<div className='peopleVerifier'>
			<SectionHeader headerCopy='Number of People' />
			<ErrorMessage />
		</div>
	);
}

export default PeopleVerifier;
