import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [catalogList, setCatalogList] = useState('all');
	return (
		<AppContext.Provider value={{ catalogList, setCatalogList }}>
			{children}
		</AppContext.Provider>
	);
};
