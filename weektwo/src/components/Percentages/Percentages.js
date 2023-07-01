import React from "react";
import SectionHeader from "../Summary/SectionHeader/SectionHeader";
import PercentageButtons from "../Buttons/PercentageButtons/PercentageButtons";
import "./Percentages.css";

function Percentages() {
	return (
		<div className='percentage'>
			<SectionHeader headerCopy='Select Tip %' />
			<div className='percentageSelector'>
				<PercentageButtons percent='5' />
				<PercentageButtons percent='10' />
				<PercentageButtons percent='15' classtwo='default' />
				<PercentageButtons percent='25' />
				<PercentageButtons percent='50' />
				<PercentageButtons percent='0' classtwo='custom' placeholder='Custom' />
			</div>
		</div>
	);
}

export default Percentages;
