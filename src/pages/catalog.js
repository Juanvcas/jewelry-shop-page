import { useContext, useState } from 'react';
import { AppContext } from '@context/AppContext';
const { ProductList } = require('@components/global/ProductList');
import { CategoryList } from '@components/global/CategoryList';
import s from '@styles/catalog.module.css';

const Catalog = () => {
	const { catalogList, setCatalogList } = useContext(AppContext);
	return (
		<main className={s.main}>
			<section className={s.main_title}>
				<h1>Catálogo de productos</h1>
			</section>
			<section className={s.main_categories}>
				<CategoryList setState={setCatalogList} />
			</section>
			<section className={s.main_productList}>
				<div className={s.productList}>
					<ProductList category={catalogList} />
				</div>
			</section>
		</main>
	);
};

export default Catalog;
