import products from './productsData';

const productsList = (req, res) => {
	req.method === 'GET'
		? res.status(200).json(products)
		: res.status(401).json("You can't modify this API");
};

export default productsList;
