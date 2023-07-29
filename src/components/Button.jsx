import React from "react";

export default function Button({ children, handlClick }) {
	return (
		<button
			style={{
				backgroundColor: "red",
				color: "white",
				padding: "10px",
				borderRadius: "5px",
				border: "none",
				cursor: "pointer",
			}}
			onClick={handlClick}>
			{children}
		</button>
	);
}
