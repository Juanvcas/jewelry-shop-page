import { useEffect, useState } from 'react';

export const useFetch = async (API, setState, render) => {
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(API);
			const jData = await res.json();
			setState(jData);
		};
		fetchData();
	}, [API || render]);
};
