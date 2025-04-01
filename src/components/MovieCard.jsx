import React from "react";

import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function MovieCard({ movie }) {
	const navigate = useNavigate();
	const param = movie.imdbID;

	function handlClick() {
		navigate(`/movies/${param}`);
	}

	return (
		<div className="movie">
			<div>
				<p>{movie.Year}</p>
			</div>
			<div>
				<img
					src={
						movie.Poster !== "N/A"
							? movie.Poster
							: "https://via.placeholder.com/400"
					}
					alt={movie.Title}
				/>
			</div>
			<div>
				<span>{movie.Type}</span>
				<h3>{movie.Title}</h3>
				<br />
				<Button children="View Detail" handlClick={handlClick} />
			</div>
		</div>
	);
}
