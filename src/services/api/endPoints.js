const API = process.env.NEXT_PUBLIC_API;

export const endPoints = {
	products: {
		getAllProducts: `${API}/api/products`,
	},
	categories: {
		getAllCategories: `${API}/api/products/categories`,
	},
};
