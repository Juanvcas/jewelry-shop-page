import { useState } from 'react';
import Image from 'next/image';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import s from '../../styles/components/modals/ImageSlider.module.css';

export const ImageSlider = ({ images }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		const newIndex = currentSlide + 1;
		if (newIndex === images.length) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide(newIndex);
		}
	};

	const prevSlide = () => {
		const newIndex = currentSlide - 1;
		if (newIndex < 0) {
			setCurrentSlide(images.length - 1);
		} else {
			setCurrentSlide(newIndex);
		}
	};

	return (
		<figure className={s.main}>
			{images.map((image, index) => (
				<div
					key={index}
					className={
						index === currentSlide ? s['slide-cont'] : s['slide-cont-hide']
					}
				>
					<Image src={image} alt={image.alt} fill />
				</div>
			))}
			{images.length > 1 ? (
				<>
					<button className={s['slider_btn-prev']} onClick={prevSlide}>
						<MdArrowBackIos />
					</button>
					<button className={s['slider_btn-next']} onClick={nextSlide}>
						<MdArrowForwardIos />
					</button>
					<ul className={s['slider_dots']}>
						{images.map((img, index) => (
							<li
								key={index}
								className={
									index === currentSlide ? `${s.dot} ${s['dot-active']}` : s.dot
								}
								onClick={() => setCurrentSlide(index)}
							></li>
						))}
					</ul>
				</>
			) : null}
		</figure>
	);
};
