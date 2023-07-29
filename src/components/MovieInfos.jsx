import React from "react";

export default function MovieInfos({ movie }) {
	console.log(movie);
	return (
		<div>
			{/* <div>
				<img
					src={
						movie.Poster !== "N/A"
							? movie.Poster
							: "https://via.placeholder.com/400"
					}
					alt={movie.Title}
				/> */}

			{/* <div>
					<h1>{movie.Title}</h1>
					<p>{movie.Year}</p>
					<p>{movie.Type}</p>
					<p>{movie.Plot}</p>
					<p>{movie.Genre}</p>
					<p>{movie.Director}</p>
					<p>{movie.Actors}</p>
					<p>{movie.Language}</p>
					<p>{movie.Country}</p>
					<p>{movie.imdbRating}</p>
					<p>{movie.imdbVotes}</p>
					<p>{movie.imdbID}</p>
					<p>{movie.BoxOffice}</p>
					<p>{movie.Production}</p>
					<p>{movie.Website}</p>
					<p>{movie.Rated}</p>
					<p>{movie.Released}</p>
					<p>{movie.Runtime}</p>
					<p>{movie.Writer}</p>
					<p>{movie.Awards}</p>
					<p>{movie.Ratings}</p>
					<p>{movie.Metascore}</p>
					<p>{movie.Response}</p>
					<p>{movie.DVD}</p>
					<p>{movie.Production}</p>
					<p>{movie.Website}</p>
				</div> */}
			{/* </div> */}
		</div>
	);
}
