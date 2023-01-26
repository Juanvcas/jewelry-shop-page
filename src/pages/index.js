import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BannerSlider } from '../components/Home/BannerSlider';
import { CategoryList } from '../components/Home/CategoryList.js';
import { RelevantProducts } from '@components/Home/RelevantProducts';
import { LinkButtonL, LinkButtonSL } from '@components/global/Buttons';
import { BsWhatsapp } from 'react-icons/bs';
import s from '../styles/Home.module.css';

const Home = () => {
	return (
		<>
			<Head>
				<title>Jewerly Shop | Home</title>
				<meta name='description' content='Tienda de joyería' />
			</Head>
			<main className={s.main}>
				<section className={s.main_banner}>
					<div className={['banner-cont']}>
						<BannerSlider />
					</div>
				</section>
				<section className={s.categoryList}>
					<CategoryList />
				</section>
				<section className={s.main_products}>
					<div className={s['products-list']}>
						<h2>Productos relevantes</h2>
						<div className={s['products-cont']}>
							<RelevantProducts />
						</div>
						<LinkButtonL
							href={'/'}
							text={'Ver Productos'}
							classes={s.produsts_button}
						/>
					</div>
				</section>
				<section className={s.main_contact}>
					<article className={s.contact_slide}>
						<div className={s.contact_info}>
							<h3>Puedes contactarnos por este link</h3>
							<LinkButtonSL
								href={'/'}
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
