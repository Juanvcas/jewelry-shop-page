import Head from 'next/head';
import Image from 'next/image';
import { BannerSlider } from '../components/Home/BannerSlider';
import { CategoryList } from '../components/Home/CategoryList.js';
import s from '../styles/Home.module.css';
import { RelevantProducts } from '@components/Home/RelevantProducts';

const Home = () => {
	return (
		<>
			<Head>
				<title>Jewerly Shop | Home</title>
				<meta name='description' content='Jewelry shop page' />
			</Head>
			<main className={s.main}>
				<section className={s.main_banner}>
					<div className={`${s['banner-cont']} content-limit`}>
						<BannerSlider />
					</div>
				</section>
				<section className={s.categoryList}>
					<div className={`content-limit`}>
						<CategoryList />
					</div>
				</section>
				<section className={s.main_products}>
					<div className={`${s['products-cont']} content-limit`}>
						<RelevantProducts />
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
