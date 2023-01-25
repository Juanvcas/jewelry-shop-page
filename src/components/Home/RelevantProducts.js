// import { useFetch } from 'hooks/useFectch';
import { useState, useEffect } from 'react';
import { endPoints } from 'services/api/endPoints';
import { ProductTile } from '@components/global/ProductTile';

export const RelevantProducts = () => {
	const [products, setProducts] = useState([]);
	// const data = useFetch(endPoints.products.getAllProducts);
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(endPoints.products.getAllProducts);
			const jData = await res.json();
			setProducts(jData);
		};
		fetchData();
	}, []);
	return (
		<>
			{products?.map(
				(item, index) =>
					item.category.id === 0 && (
						<ProductTile
							key={index}
							image={item.images[0]}
							title={item.title}
							price={item.price}
						/>
					)
			)}
		</>
	);
};
