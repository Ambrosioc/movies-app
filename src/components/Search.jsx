import React, { useEffect } from "react";
import { getMovieRequest } from "../services/api/movieApi";
import SearchIcon from "../search.svg";

export default function Search({ searchValue, setSearchValue, setMovies }) {
	useEffect(() => {
		getMovieRequest(searchValue)
			.then((data) => {
				if (data.Search) {
					setMovies(data.Search);
				}
			})
			.catch((error) => console.log(error));
	}, [searchValue, setMovies]);
	return (
		<div className="search">
			<input
				type="text"
				placeholder="Search for a movie..."
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			/>
			<img
				src={SearchIcon}
				alt="search-icon"
				onClick={() => getMovieRequest(searchValue)}
			/>
		</div>
	);
}
