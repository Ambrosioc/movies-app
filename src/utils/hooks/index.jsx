import { useState, useEffect, useMemo } from "react";

export function useFetch(url) {
	const [data, setDada] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const dataArray = useMemo(() => [], []);

	dataArray.push(url);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await Promise.all(
					dataArray.map((url) => fetch(url).then((res) => res.json()))
				);
				setDada(response);
				setIsLoading(false);
			} catch (error) {
				setError(error.message);
				setIsLoading(false);
			}
		};
		fetchData();
	}, [dataArray]);

	return { data, error, isLoading };
}
