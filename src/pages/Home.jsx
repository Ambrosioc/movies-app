import React, { useState } from "react";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";

export default function Home({ movies, setMovies }) {
	const [searchValue, setSearchValue] = useState("");

	return (
		<div className="app">
			<h1>MovieLand</h1>
			<Search
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				setMovies={setMovies}
			/>
			<div className="container">
				{movies?.length > 0 ? (
					movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
				) : (
					<h2>No movies founds</h2>
				)}
			</div>
		</div>
	);
}
