import React from "react";
import { useState } from "react";

export default function Test() {
	const [data, setData] = useState({
		categories: [],
		created_at: "",
		icon_url: "",
		id: "",
		updated_at: "",
		url: "",
		value: "",
	});

	function handleClick() {
		fetch("https://api.chucknorris.io/jokes/random")
			.then((data) => data.json())
			.then((data) => {
				setData({
					categories: data.categories,
					created_at: data.created_at,
					icon_url: data.icon_url,
					id: data.id,
					updated_at: data.updated_at,
					url: data.url,
					value: data.value,
				});
			});
	}

	return (
		<div>
			<button onClick={handleClick}>Click Me!</button>

			<div>{data.categories}</div>
			<div>{data.created_at}</div>
			<div>{data.icon_url}</div>
			<div>{data.id}</div>
			<div>{data.updated_at}</div>
			<div>{data.url}</div>
			<div>{data.value}</div>
		</div>
	);
}
