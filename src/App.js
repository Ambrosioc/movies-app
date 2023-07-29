import { useState } from "react";
import "./App.css";
import MovieInfos from "./components/MovieInfos";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
	const [movies, setMovies] = useState([]);
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Home movies={movies} setMovies={setMovies} />}
				/>
				<Route path={"/movie/:id"} element={<MovieInfos movies={movies} />} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</>
	);
}

export default App;
