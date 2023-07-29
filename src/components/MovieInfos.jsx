import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";

export default function MovieInfos({ movies }) {
	const { id } = useParams();
	const navigate = useNavigate();
	const movie = movies.find((movie) => movie.imdbID === id);

	const handlClick = () => {
		navigate("/");
	};
	if (movies.length === 0) {
		return <h1>Not Found</h1>;
	}

	return (
		<div>
			<div
				style={{
					backgroundImage: `url(${movie.Poster})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.8)",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}>
				<img
					src={
						movie.Poster !== "N/A"
							? movie.Poster
							: "https://via.placeholder.com/400"
					}
					alt={movie.Title}
				/>

				<div>
					<h1>{movie.Title}</h1>
					<p>{movie.Year}</p>
					<p>{movie.Type}</p>
				</div>
				<Button children="Back" handlClick={handlClick} />
			</div>
		</div>
	);
}
