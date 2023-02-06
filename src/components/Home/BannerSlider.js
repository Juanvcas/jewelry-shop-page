import Image from 'next/image';
import s from '../../styles/components/BannerSlider.module.css';
import { Slide } from './Slide';

export const BannerSlider = () => {
	return (
		<ul className={s.main}>
			<li className={s['slide-cont']}>
				<div className={`${s['slide-main']} ${s.slide}`}>
					<div className={s['slide-main_info']}>
						<h1>Jewelry Shop</h1>
						<h2>Aqui puedes encontrar los mejores accesorios para ti!</h2>
					</div>
					<figure className={s['slide-main_image']}>
						<Image
							src={'https://i.postimg.cc/RZXFTLnW/portada1.jpg'}
							alt='Mujer luciendo accesorios'
							fill
						/>
						<span></span>
					</figure>
				</div>
			</li>
			<li className={s['slide-cont']}>
				<Slide
					style={s['sub-slide1']}
					title={'Aretas'}
					text={
						<>
							Necesitas aretas para ese nuevo vestido?
							<br />
							¡Aquí las encuentras!
						</>
					}
					image={'https://i.postimg.cc/RVfnNNRb/pexels-dima-valkov-3266700.jpg'}
				/>
			</li>
		</ul>
	);
};
