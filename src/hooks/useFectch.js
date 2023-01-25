import { useEffect, useState } from 'react';

export const useFetch = async (API) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(API);
			const jData = await res.json();
			setData(jData);
		};
		fetchData();
	}, [API]);

	console.log(data);
	return data;
};
