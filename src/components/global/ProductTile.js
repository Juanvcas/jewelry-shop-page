import { useContext, useEffect, useState } from 'react';
import { AppContext } from '@context/AppContext';
import Image from 'next/image';
import {
	BsFillBookmarkPlusFill,
	BsFillBookmarkCheckFill,
} from 'react-icons/bs';
import s from '../../styles/components/global/ProductTile.module.css';

export const ProductTile = ({ product }) => {
	const {
		setProductModal,
		setProductModalValue,
		bookmarks,
		setNewBookmark,
		setDeleteBookmark,
	} = useContext(AppContext);

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

	const handlerModal = () => {
		setProductModalValue(product);
		setProductModal(true);
	};

	useEffect(() => {
		const isAdded = bookmarks.products.some((item) => item.id === product.id);
		isAdded && setAdded(true);
	}, []);

	return (
		<article className={s.main} onClick={handlerModal}>
			<span className={s.main_bookmark} onClick={(e) => handleBokkmark(e)}>
				{added ? <BsFillBookmarkCheckFill /> : <BsFillBookmarkPlusFill />}
			</span>
			<div className={s['main-cont']}>
				<figure className={s.main_image}>
					<Image
						src={product.images[0]}
						alt={product.title}
						fill
						sizes='max-width: 30rem'
					/>
				</figure>
				<h3>{product.title}</h3>
			</div>
			<p>$60.000</p>
		</article>
	);
};
