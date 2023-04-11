import { useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { Slide } from '../Home/Slide';
import s from '../../styles/components/global/Slider.module.css';

export const Slider = ({ slides, style }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		const newIndex = currentSlide + 1;
		if (newIndex === slides.length) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide(newIndex);
		}
	};

	const prevSlide = () => {
		const newIndex = currentSlide - 1;
		if (newIndex < 0) {
			setCurrentSlide(slides.length - 1);
		} else {
			setCurrentSlide(newIndex);
		}
	};

	return (
		<ul className={`${s.main} ${style}`}>
			{slides.map((slide, index) => (
				<li
					key={index}
					className={
						index === currentSlide ? s['slide-cont'] : s['slide-cont-hide']
					}
				>
					<Slide
						title={slide?.title}
						text={slide?.text}
						image={slide?.image.url}
						alt={slide?.image.alt}
						style={slide?.style}
					/>
				</li>
			))}
			{slides.length > 1 ? (
				<>
					<button className={s['slider_btn-prev']} onClick={prevSlide}>
						<MdArrowBackIos />
					</button>
					<button className={s['slider_btn-next']} onClick={nextSlide}>
						<MdArrowForwardIos />
					</button>
					<ul className={s['slider_dots']}>
						{slides.map((sld, index) => (
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
		</ul>
	);
};
