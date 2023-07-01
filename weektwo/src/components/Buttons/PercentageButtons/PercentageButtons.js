import React from "react";
import "./PercentageButtons.css";

function PercentageButtons({
	percent,
	classtwo = undefined,
	placeholder = undefined,
}) {
	setTimeout(() => {
		const percentText = document.querySelector(".selections.custom");
		percentText.children[0].textContent =
			percentText.children[0].getAttribute("placeholder");
	}, 1);

	// document.addEventListener(
	// 	"DOMContentLoaded",
	// 	function () {
	// 		const percentText = document.querySelector(".selections.custom");
	// 		percentText.children[0].textContent =
	// 			percentText.children[0].getAttribute("placeholder");
	// 	},
	// 	false
	// );

	// const [percentText, setPercentText] = useState(
	// 	document.querySelector(".selections.custom").children[0].textContent
	// );

	// document.addEventListener(
	// 	"DOMContentLoaded",
	// 	function () {
	// 		setPercentText(percentText.children[0].getAttribute("placeholder"));
	// 	},
	// 	false
	// );

	return (
		<div className={`selections ${classtwo}`}>
			<div
				className='selectionCopy'
				placeholder={placeholder}>{`${percent}$`}</div>
		</div>
	);
}

export default PercentageButtons;
