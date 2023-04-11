import categories from './categoriesData';

const categoriesList = (req, res) => {
	req.method === 'GET'
		? res.status(200).json(categories)
		: res.status(401).json("You can't modify this API");
};

export default categoriesList;
