import { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useFetch } from 'hooks/useFectch';
import { endPoints } from '@services/api/endPoints';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [catalogList, setCatalogList] = useState('all');

	useFetch(endPoints.products.getAllProducts, setProducts);

	const [productModal, setProductModal] = useState(false);
	const [productModalValue, setProductModalValue] = useState({});

	const [search, setSearch] = useState(false);
	const [searchValue, setSearchValue] = useState([]);
	const [searchModal, setSearchModal] = useState(false);

	const [media, setMedia] = useState(false);

	const { bookmarks, setNewBookmark, setDeleteBookmark } = useLocalStorage();

	useEffect(() => {
		window.innerWidth >= 1024 ? setMedia(true) : setMedia(false);
		window.addEventListener('resize', () => {
			window.innerWidth >= 1024 ? setMedia(true) : setMedia(false);
		});
	}, []);

	return (
		<AppContext.Provider
			value={{
				products,
				catalogList,
				setCatalogList,
				productModal,
				setProductModal,
				productModalValue,
				setProductModalValue,
				search,
				setSearch,
				searchValue,
				setSearchValue,
				searchModal,
				setSearchModal,
				media,
				bookmarks,
				setNewBookmark,
				setDeleteBookmark,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
