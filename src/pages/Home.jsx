import React, { useState } from "react";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import { useFetch } from "../utils/hooks";

const URL_2 = "https://www.omdbapi.com/?i=tt3896198&apikey=c17d686d";

export default function Home({ movies, setMovies }) {
	const [searchValue, setSearchValue] = useState("");

	const { data, error, isLoading } = useFetch(URL_2);
	console.log(data, movies);

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	return (
		<div className="app">
			<h1>MovieLand</h1>
			<Search
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				setMovies={setMovies}
			/>
			{error && <h2>{error}</h2>}
			{searchValue ? (
				<h2>Search results for: {searchValue}</h2>
			) : (
				<>
					<h2>Popular movies</h2>
					<br />
					<div className="container">
						{data ? (
							data.map((movie, index) => (
								<MovieCard key={index} movie={movie} />
							))
						) : (
							<h2>No movies founds</h2>
						)}
					</div>
				</>
			)}

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
