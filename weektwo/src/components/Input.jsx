import React from "react";
import { useState } from "react";
import "./Input.css";

function Input({
	title,
	icon,
	image,
	children,
	amount,
	setAmount,
	selected,
	setSelected,
}) {
	function handleClick(e, icon) {
		setSelected(icon);
		console.log(selected, e.target);
	}
	function handleChange(e) {
		setAmount(e.target.value);
	}

	return (
		<div>
			<div className='peopleVerifier'>
				<div className='sectionHeader left'>{title}</div>
				{children}
			</div>
			<div
				className={`input ${selected === icon && "customSelected"}`}
				onClick={(e) => handleClick(e, icon)}>
				<div className={`icon ${icon}`}>
					<img src={image} alt={`a ${icon} symbol`} />
				</div>
				<input
					type='text'
					value={amount}
					// className='number'
					placeholder='0'
					onChange={handleChange}
				/>
			</div>
		</div>
	);
}

export default Input;
