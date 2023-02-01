import { AppContext } from '@context/AppContext';
import { useContext } from 'react';
import { ProductModal } from '@components/modals/ProductModal';
import { SearchModal } from '@components/modals/SearchModal';

const MainContainer = ({ children }) => {
	const { productModal, setProductModal, productModalValue, searchModal } =
		useContext(AppContext);
	return (
		<>
			{children}
			{productModal && (
				<ProductModal product={productModalValue} modal={setProductModal} />
			)}
			{searchModal && <SearchModal />}
		</>
	);
};

export default MainContainer;
