import { useContext } from 'react';
import { AppContext } from '@context/AppContext';
import { ProductTile } from '@components/global/ProductTile';
import s from '@styles/bookmarks.module.css';

const Bookmarks = () => {
	const { bookmarks } = useContext(AppContext);
	return (
		<main className={s.main}>
			<section className={s.main_title}>
				<h1>Tus productos guardados</h1>
			</section>
			<section className={s.main_products}>
				{bookmarks?.products?.map((item, index) => (
					<ProductTile key={index} product={item} />
				))}
			</section>
		</main>
	);
};

export default Bookmarks;
