import { useContext } from 'react';
import { AppContext } from 'context/AppContext';
import Head from 'next/head';
import Image from 'next/image';
import { Slider } from '../components/global/Slider';
import { Slide } from '../components/Home/Slide';
import { CategoryList } from '../components/global/CategoryList.js';
import { ProductList } from 'Containers/ProductList';
import { LinkButtonL, LinkButtonSL } from '@components/global/Buttons';
import { BsWhatsapp } from 'react-icons/bs';
import s from '../styles/Home.module.css';

const BannerSlides = [
	{
		title: <h1>Jewelry Shop</h1>,
		text: <h2>¡Aqui puedes encontrar los mejores accesorios para ti!</h2>,
		image: {
			url: 'https://i.postimg.cc/RZXFTLnW/portada1.jpg',
			alt: 'Mujer luciendo multiples accesorios',
		},
		style: {
			main: 'slide-main',
			info: 'slide-main_info',
			image: 'slide-main_image',
		},
	},
	{
		title: <h2>Aretas</h2>,
		text: (
			<h3>
				Necesitas aretas para ese nuevo vestido?
				<br />
				¡Aquí las encuentras!
			</h3>
		),
		image: {
			url: 'https://i.postimg.cc/RVfnNNRb/pexels-dima-valkov-3266700.jpg',
			alt: 'Imagen de aretas de oro entrelazadas',
		},
		style: {
			main: 'slide1',
		},
	},
];

const Home = () => {
	const { setCatalogList } = useContext(AppContext);
	return (
		<>
			<Head>
				<title>Jewerly Shop | Home</title>
				<meta name='description' content='Tienda de joyería' />
			</Head>
			<main className={s.main}>
				<section className={s.main_banner}>
					<div className={['banner-cont']}>
						<Slider slides={BannerSlides} style={s.banner_slider} />
					</div>
				</section>
				<section className={s.categoryList}>
					<CategoryList setState={setCatalogList} />
				</section>
				<section className={s.main_products}>
					<div className={s['products-list']}>
						<h2>Productos relevantes</h2>
						<div className={s['products-cont']}>
							<ProductList category={0} />
						</div>
						<LinkButtonL
							href={'/catalog'}
							text={'Ver Productos'}
							classes={s.produsts_button}
							click={{ function: setCatalogList, value: 'all' }}
						/>
					</div>
				</section>
				<section className={s.main_contact}>
					<article className={s.contact_slide}>
						<div className={s.contact_info}>
							<h3>Puedes contactarnos por este link</h3>
							<LinkButtonSL
								href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUM}`}
								target={'blank_'}
								text={'Whatsapp'}
								logo={<BsWhatsapp />}
								classes={s['info-button']}
							/>
						</div>
						<figure className={s.contact_image}>
							<Image
								src={
									'https://i.postimg.cc/15FYX36W/kateryna-hliznitsova-ce-SCZzj-TReg-unsplash.jpg'
								}
								alt='Mujer luciendo una cadena'
								fill
							/>
							<span></span>
						</figure>
					</article>
				</section>
			</main>
		</>
	);
};

export default Home;
