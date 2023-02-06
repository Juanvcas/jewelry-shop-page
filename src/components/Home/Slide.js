import Image from 'next/image';
import s from '@styles/components/Slide.module.css';

export const Slide = ({ style, title, text, image }) => {
	return (
		<div className={`${s['sub-slide']} ${style}`}>
			<div className={s['sub-slide_info']}>
				<h2>{title}</h2>
				<h3>{text}</h3>
			</div>
			<figure className={s['sub-slide_image']}>
				<Image src={image} alt={title} fill />
				<span></span>
			</figure>
		</div>
	);
};
