import React from "react";
import "./People.css";
import Input from "./Input";
import { person } from "../images/images.js";

function People({ amount, setAmount, selected, setSelected }) {
	// myProp="<div>This is some html</div>"
	// <div dangerouslySetInnerHTML=myProp={{ __html: this.renderMyProp() }}></div>

	return (
		<div>
			<div className='people'>
				<Input
					title={"Number of People"}
					icon={"person"}
					image={person}
					amount={amount}
					setAmount={setAmount}
					selected={selected}
					setSelected={setSelected}>
					<div className='errorMessage'></div>
				</Input>
			</div>
		</div>
	);
}

export default People;
