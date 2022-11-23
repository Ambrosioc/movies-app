import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

// c17d686d
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c17d686d";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `${API_URL}&s=${searchValue}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
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
