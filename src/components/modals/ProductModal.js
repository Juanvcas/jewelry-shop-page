import { useState, useEffect, useContext } from 'react';
import { AppContext } from '@context/AppContext';
import Image from 'next/image';
import { LinkButtonL } from '../global/Buttons';
import { BiArrowBack } from 'react-icons/bi';
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import s from '@styles/components/modals/ProductModal.module.css';
import {
	BsFillBookmarkPlusFill,
	BsFillBookmarkCheckFill,
} from 'react-icons/bs';
import { ImageSlider } from './ImageSlider';

export const ProductModal = ({ product, modal }) => {
	const { bookmarks, setNewBookmark, setDeleteBookmark } =
		useContext(AppContext);

	const [added, setAdded] = useState(false);
	const [image, setImage] = useState(0);

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

	const slider = (input) => {
		if (product.images.length > 1) {
			if (input === 'next') {
				image !== product.images.length - 1 ? setImage(image + 1) : setImage(0);
			} else if (input === 'prev') {
				image === 0 ? setImage(product.images.length - 1) : setImage(image - 1);
			}
		}
	};

	useEffect(() => {
		const isAdded = bookmarks.products.some((item) => item.id === product.id);
		isAdded && setAdded(true);
	}, []);

	return (
		<aside className={s['cont']} onClick={() => modal(false)}>
			<div className={s.main} onClick={(e) => e.stopPropagation()}>
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
							{/* <figure className={s.images}>
								<Image src={product?.images[image]} alt={product?.title} fill />
								{product?.images.length > 1 && (
									<>
										<span onClick={() => slider('prev')}>
											<BsFillArrowLeftCircleFill />
										</span>
										<span onClick={() => slider('next')}>
											<BsFillArrowRightCircleFill />
										</span>
									</>
								)}
							</figure> */}
							<ImageSlider images={product.images} />
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
			</div>
		</aside>
	);
};
