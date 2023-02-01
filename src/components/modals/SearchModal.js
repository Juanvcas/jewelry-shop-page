import { useContext } from 'react';
import { AppContext } from '@context/AppContext';
import { SearchProductTile } from '@components/global/SearchProductTile';
import { BiX } from 'react-icons/bi';
import s from '@styles/components/modals/SearchModal.module.css';

export const SearchModal = () => {
	const {
		products,
		search,
		setSearch,
		searchValue,
		setSearchValue,
		searchModal,
		setSearchModal,
		setProductModal,
		setProductModalValue,
	} = useContext(AppContext);

	const onSearch = (text) => {
		text ? setSearch(true) : setSearch(false);
		const matches = products.filter(
			(item) =>
				item.title.toLowerCase().includes(text.toLowerCase()) ||
				item.category.title.toLowerCase().includes(text.toLowerCase())
		);
		setSearchValue(matches);
	};

	const handleClose = () => {
		setSearchModal(!searchModal);
		setSearchValue([]);
	};

	return (
		<aside className={s.main} onClick={handleClose}>
			<div className={s.main_header} onClick={(e) => e.stopPropagation()}>
				<section className={s.header_search}>
					<input
						type={'search'}
						placeholder={'Anillo...'}
						onChange={(e) => onSearch(e.target.value)}
					/>
					<span onClick={handleClose}>
						<BiX />
					</span>
				</section>
			</div>
			{search && (
				<div className={s.main_results}>
					<section>
						{searchValue.map((item, index) => (
							<SearchProductTile
								key={index}
								product={item}
								setProductModal={setProductModal}
								setProductModalValue={setProductModalValue}
							/>
						))}
					</section>
				</div>
			)}
		</aside>
	);
};
