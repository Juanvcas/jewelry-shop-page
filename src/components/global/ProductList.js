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
							<ProductTile
								key={index}
								image={item.images[0]}
								title={item.title}
								price={item.price}
							/>
						)
					);
				} else {
					return (
						<ProductTile
							key={index}
							image={item.images[0]}
							title={item.title}
							price={item.price}
						/>
					);
				}
			})}
		</>
	);
};
