import React from "react";
import "./Bill.css";
import Input from "./Input";
import { dollar } from "../images/images.js";

function Bill({ amount, setAmount, selected, setSelected }) {
	return (
		<div>
			<div className='bill'>
				<Input
					title={"Bill"}
					icon={"dollar"}
					image={dollar}
					amount={amount}
					setAmount={setAmount}
					selected={selected}
					setSelected={setSelected}
				/>
			</div>
		</div>
	);
}

export default Bill;
