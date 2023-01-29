const API = process.env.NEXT_PUBLIC_API;

export const endPoints = {
	products: {
		getAllProducts: `${API}/products`,
	},
	categories: {
		getAllCategories: `${API}/products/categories`,
	},
};
