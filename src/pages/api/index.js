const api = (req, res) => {
	req.method === 'GET'
		? res.status(200).json('Jewelry Shp API')
		: res.status(401).json("You can't modify this API");
};

export default api;
