import { useState } from 'react';
import { useFetch } from 'hooks/useFectch';
import { ProductTile } from './ProductTile';
import { endPoints } from 'services/api/endPoints';

export const ProductList = ({ category }) => {
	const [products, setProducts] = useState([]);
	useFetch(endPoints.products.getAllProducts, setProducts, category);
	return (
		<>
			{products?.map((item, index) => {
				if (category !== 'all') {
					return (
						item.category.id === category && (
							<ProductTile key={index} product={item} />
						)
					);
				} else {
					return <ProductTile key={index} product={item} />;
				}
			})}
		</>
	);
};
