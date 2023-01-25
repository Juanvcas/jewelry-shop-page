import Image from 'next/image';
import s from '../../styles/components/global/ProductTile.module.css';

export const ProductTile = ({ image, title, price }) => {
	return (
		<article className={s.main}>
			<div className={s['main-cont']}>
				<figure className={s.main_image}>
					<Image src={image} alt={title} fill />
				</figure>
				<h3>{title}</h3>
			</div>
			<p>$60.000</p>
		</article>
	);
};
