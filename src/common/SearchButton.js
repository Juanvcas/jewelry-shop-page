import { useContext } from 'react';
import { AppContext } from '@context/AppContext';
import { BiSearch } from 'react-icons/bi';

export const SearchButton = ({ style }) => {
	const { searchModal, setSearchModal } = useContext(AppContext);
	return (
		<span className={style} onClick={() => setSearchModal(!searchModal)}>
			<BiSearch />
		</span>
	);
};
