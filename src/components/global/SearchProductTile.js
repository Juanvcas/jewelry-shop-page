import Image from 'next/image';
import { BiArrowBack } from 'react-icons/bi';
import s from '@styles/components/global/SearchProductTile.module.css';

export const SearchProductTile = ({
	product,
	setProductModal,
	setProductModalValue,
	setSearchModal,
	setSearchValue,
}) => {
	const handlerModal = (e) => {
		e.stopPropagation();
		setProductModalValue(product);
		setProductModal(true);
		setSearchModal(false);
		setSearchValue([]);
	};

	return (
		<article className={s.main} onClick={(e) => handlerModal(e)}>
			<div className={s.main_info}>
				<figure className={s.info_image}>
					<Image
						src={product.images[0]}
						alt={product.title}
						fill
						sizes={'max-width: 30rem'}
					/>
				</figure>
				<div className={s['info-cont']}>
					<h3>{product.title}</h3>
					<p>{product.description}</p>
					<p>$60.000</p>
				</div>
			</div>
			<span className={s.main_modal}>
				<BiArrowBack />
			</span>
		</article>
	);
};
