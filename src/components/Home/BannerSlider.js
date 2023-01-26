import Image from 'next/image';
import s from '../../styles/components/BannerSlider.module.css';

export const BannerSlider = () => {
	return (
		<ul className={s.main}>
			<li className={s['slide-cont']}>
				<div className={`${s['slide-main']} ${s['slide']}`}>
					<h1>Tienda Jewelry</h1>
					<h3>¡Aqui puedes encontrar los mejores accesorios y joyería!</h3>
				</div>
			</li>
			<li className={s['slide-cont']}>
				<div className={`${s['slide-earrings']} ${s['slide']}`}>
					<h2>Aretas</h2>
					<div className={s.earrings_image}>
						<Image
							src={
								'https://i.postimg.cc/RVfnNNRb/pexels-dima-valkov-3266700.jpg'
							}
							alt={'Two gold earrings with a black background'}
							fill
						/>
					</div>
				</div>
			</li>
		</ul>
	);
};
