// c17d686d
export const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

export const getMovieRequest = async (searchValue) => {
	const url = `${API_URL}&s=${searchValue}`;

	const response = await fetch(url);
	const data = await response.json();

	return data;
};
