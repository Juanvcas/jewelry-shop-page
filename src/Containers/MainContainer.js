import { AppContext } from '@context/AppContext';
import { useContext } from 'react';
import { ProductModal } from '@components/global/ProductModal';

const MainContainer = ({ children }) => {
	const { productModal, setProductModal, productModalValue } =
		useContext(AppContext);
	return (
		<>
			{children}
			{productModal && (
				<ProductModal product={productModalValue} modal={setProductModal} />
			)}
		</>
	);
};

export default MainContainer;
