import { useState, useEffect, useContext } from 'react';
import { AppContext } from '@context/AppContext';
import Image from 'next/image';
import { LinkButtonL } from '../global/Buttons';
import { BiArrowBack } from 'react-icons/bi';
import s from '@styles/components/modals/ProductModal.module.css';
import {
	BsFillBookmarkPlusFill,
	BsFillBookmarkCheckFill,
} from 'react-icons/bs';

export const ProductModal = ({ product, modal }) => {
	const { bookmarks, setNewBookmark, setDeleteBookmark } =
		useContext(AppContext);

	const [added, setAdded] = useState(false);

	const handleBokkmark = (e) => {
		e.stopPropagation();
		const index = bookmarks.products.findIndex(
			(item) => item.id === product.id
		);
		if (index !== -1) {
			setDeleteBookmark(product);
			setAdded(false);
		} else {
			const newBm = product;
			setNewBookmark(newBm);
			setAdded(true);
		}
	};

	useEffect(() => {
		const isAdded = bookmarks.products.some((item) => item.id === product.id);
		isAdded && setAdded(true);
	}, []);

	return (
		<aside className={s.main}>
			<div className={s['main-cont']}>
				<section className={s.main_header}>
					<BiArrowBack onClick={() => modal(false)} />
					<span
						className={s.header_bookmark}
						onClick={(e) => handleBokkmark(e)}
					>
						{added ? <BsFillBookmarkCheckFill /> : <BsFillBookmarkPlusFill />}
					</span>
				</section>
				<div className={s['info-cont']}>
					<section className={s.main_images}>
						<figure className={s.images}>
							<Image src={product?.images[0]} alt={product?.title} fill />
						</figure>
					</section>
					<section className={s.main_info}>
						<div className={s.info}>
							<h2>{product?.title}</h2>
							<h3>{product?.description}</h3>
							<p>$60.000</p>
						</div>
					</section>
				</div>
			</div>
			<section>
				<LinkButtonL
					href={'https://wa.me'}
					text={'¡Lo Quiero!'}
					target={'_blank'}
					classes={s.main_button}
				/>
			</section>
		</aside>
	);
};
