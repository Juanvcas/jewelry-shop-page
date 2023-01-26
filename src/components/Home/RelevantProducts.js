// import { useFetch } from 'hooks/useFectch';
import { useState } from 'react';
import { useFetch } from 'hooks/useFectch';
import { endPoints } from 'services/api/endPoints';
import { ProductTile } from '@components/global/ProductTile';

export const RelevantProducts = () => {
	const [products, setProducts] = useState([]);
	useFetch(endPoints.products.getAllProducts, setProducts);
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
