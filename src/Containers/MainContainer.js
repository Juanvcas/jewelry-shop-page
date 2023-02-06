import { AppContext } from '@context/AppContext';
import { useContext } from 'react';
import { BottomMenu } from '@components/global/BottomMenu';
import { ProductModal } from '@components/modals/ProductModal';
import { SearchModal } from '@components/modals/SearchModal';

const MainContainer = ({ children }) => {
	const {
		productModal,
		setProductModal,
		productModalValue,
		searchModal,
		media,
	} = useContext(AppContext);
	return (
		<>
			{children}
			{!media && <BottomMenu />}
			{productModal && (
				<ProductModal product={productModalValue} modal={setProductModal} />
			)}
			{searchModal && <SearchModal />}
		</>
	);
};

export default MainContainer;
