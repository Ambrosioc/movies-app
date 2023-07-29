// c17d686d
const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=c17d686d";

export const getMovieRequest = async (searchValue) => {
	const url = `${API_URL}&s=${searchValue}`;

	const response = await fetch(url);
	const data = await response.json();

	return data;
};
