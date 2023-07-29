import React from "react";
// import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
	// const navigate = useNavigate();

	return (
		<div
			className="movie"
			onClick={() => {
				console.log(movie);
			}}>
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
			</div>
		</div>
	);
}
