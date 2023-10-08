import { useState } from "react";
import "./App.css";
import {
	iconDollar,
	iconPerson,
	logo,
	person,
	splitter,
} from "./images/images.js";
import Bill from "./components/Bill.jsx";
import People from "./components/People";
import Keypad from "./components/Keypad";

function App() {
	const [billAmount, setBillAmount] = useState();
	const [peopleAmount, setPeopleAmount] = useState();
	const [percentage, setPercentage] = useState();
	const [tipAmount, setTipAmount] = useState(0.0);
	const [total, setTotal] = useState(0.0);
	const [selected, setSelected] = useState("");

	function handleClick() {
		setTipAmount((billAmount * (percentage / 100)) / peopleAmount);
		setTotal(
			billAmount / peopleAmount +
				(billAmount * (percentage / 100)) / peopleAmount
		);
	}

	return (
		<div className='body'>
			<div className='title'>
				<img src={splitter} />
			</div>

			<div className='calculator'>
				<div className='inputs'>
					<Bill
						amount={billAmount}
						setAmount={setBillAmount}
						selected={selected}
						setSelected={setSelected}
					/>

					<Keypad
						percentage={percentage}
						setPercentage={setPercentage}
						selected={selected}
						setSelected={setSelected}
					/>

					<People
						amount={peopleAmount}
						setAmount={setPeopleAmount}
						selected={selected}
						setSelected={setSelected}
					/>
				</div>

				<div className='result'>
					<div className='returns tip'>
						<div className='summary'>
							<div className='sectionHeader'>Tip Amount</div>
							<div className='sectionSubHeader'>/ person</div>
						</div>
						<div className='amount'>${tipAmount.toFixed(2)}</div>
					</div>
					<div className='returns total'>
						<div className='summary'>
							<div className='sectionHeader'>Total</div>
							<div className='sectionSubHeader'>/ person</div>
						</div>
						<div className='amount'>${total.toFixed(2)}</div>
					</div>
					<div className='reset' onClick={handleClick}>
						<div className='resetCopy'>RESET</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
