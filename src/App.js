import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MovieInfos from "./components/MovieInfos";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
	const [movies, setMovies] = useState([]);

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Home movies={movies} setMovies={setMovies} />}
				/>
				<Route path={"/movies"} element={<Movies />} />
				<Route path={"/movies/:id"} element={<MovieInfos movies={movies} />} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</>
	);
}

export default App;
