import { createContext, useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [catalogList, setCatalogList] = useState('all');
	const [productModal, setProductModal] = useState(false);
	const [productModalValue, setProductModalValue] = useState({});

	const { bookmarks, setNewBookmark, setDeleteBookmark } = useLocalStorage();

	return (
		<AppContext.Provider
			value={{
				catalogList,
				setCatalogList,
				productModal,
				setProductModal,
				productModalValue,
				setProductModalValue,
				bookmarks,
				setNewBookmark,
				setDeleteBookmark,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
