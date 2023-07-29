import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import SearchIcon from "./search.svg";
import { getMovieRequest } from "./services/api/movieApi";

function App() {
	const [searchValue, setSearchValue] = useState("");
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getMovieRequest(searchValue)
			.then((data) => {
				if (data.Search) {
					setMovies(data.Search);
					console.log(movies);
				}
			})
			.catch((error) => console.log(error));
	}, [searchValue]);

	return (
		<div className="app">
			<h1>MovieLand</h1>
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

export default App;
