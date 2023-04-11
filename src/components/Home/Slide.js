import Image from 'next/image';
import s from '@styles/components/Slide.module.css';

export const Slide = ({ title, text, image, alt, style }) => {
	return (
		<div className={`${s['slide']} ${style?.main ? s[style.main] : null}`}>
			<div
				className={`${s['slide_info']} ${style?.info ? s[style.info] : null}`}
			>
				{title}
				{text}
			</div>
			<figure
				className={`${s['slide_image']} ${
					style?.image ? s[style.image] : null
				}`}
			>
				<Image src={image} alt={alt || title} fill />
				<span></span>
			</figure>
		</div>
	);
};
