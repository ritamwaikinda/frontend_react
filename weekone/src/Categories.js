import React from "react";
import data from "../data.json";
import { memory, reaction, verbal, visual } from "../assets/images.js";
import "./Categories.css";

function Categories() {
	function getIcon(iconName) {
		const allIcons = {
			memory: memory,
			reaction: reaction,
			verbal: verbal,
			visual: visual,
		};
		return allIcons[iconName];
	}

	return (
		<div className='columns'>
			{Object.keys(data).map((key) => (
				<>
					<div className={`categories ${data[key].category.toLowerCase()}`}>
						<div className='icon'>
							<img src={getIcon(data[key].category.toLowerCase())} />
						</div>
						<div className='label'>{data[key].category}</div>
						<div className='score'>
							<div className='numerator'>{data[key].score} </div>
							<div className='denominator'>&nbsp;/ 100</div>
						</div>
					</div>
				</>
			))}
		</div>
	);
}

export default Categories;
