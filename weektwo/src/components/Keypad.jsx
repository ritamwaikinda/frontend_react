import React from "react";
import { useState } from "react";
import "./Keypad.css";

function Keypad({ setPercentage, setSelected }) {
	const [clicked, setClicked] = useState(0);
	const [defaultStyle, setDefaultStyle] = useState(true);

	//for the whole page
	// onClick = handleClick((e) => {clicked === 6 && keys !== 6 ?? setClicked(0) : setClicked(clicked)})

	function handleClick(e, keys) {
		setPercentage(parseInt(e.target.innerText));
		defaultStyle && setDefaultStyle(false);
		setClicked(keys);
		setSelected(clicked);
	}

	function handleChange(e) {
		setPercentage(parseInt(e.target.value));
	}

	function Button({ percent, defaultClass, bgcopy, keys }) {
		return (
			<div
				keys={keys}
				className={`selections ${defaultClass}`}
				onClick={(e) => handleClick(e, keys)}>
				<button className={`selectionCopy ${bgcopy}`}>{percent}%</button>
			</div>
		);
	}

	return (
		<div>
			<div className='percentage'>
				<div className='sectionHeader left'>Select Tip %</div>
				<div className='percentageSelector'>
					<Button
						keys={1}
						percent={5}
						defaultClass={clicked === 1 && "selectedBackground"}
						bgcopy={clicked === 1 && "selectedColor"}
					/>
					<Button
						keys={2}
						percent={10}
						defaultClass={clicked === 2 && "selectedBackground"}
						bgcopy={clicked === 2 && "selectedColor"}
					/>
					<Button
						keys={3}
						percent={15}
						defaultClass={`${defaultStyle && "defaultStyle"} ${
							clicked === 3 && "selectedBackground"
						}`}
						bgcopy={clicked === 3 && "selectedColor"}
					/>
					<Button
						keys={4}
						percent={25}
						defaultClass={clicked === 4 && "selectedBackground"}
						bgcopy={clicked === 4 && "selectedColor"}
					/>
					<Button
						keys={5}
						percent={50}
						defaultClass={clicked === 5 && "selectedBackground"}
						bgcopy={clicked === 5 && "selectedColor"}
					/>
					<div
						className={`selections custom ${clicked === 6 && "customSelected"}`}
						onClick={(e) => handleClick(e, 6)}>
						<input
							className='selectionCopy'
							placeholder='Custom'
							onChange={(e) => handleChange(e)}></input>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Keypad;
