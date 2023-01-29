import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BiSearch, BiMenu } from 'react-icons/bi';
import { HeaderNav } from './HeaderNav';
import s from '../../styles/components/global/Header.module.css';

export const Header = () => {
	const [nav, setNav] = useState(false);
	useEffect(() => {
		window.addEventListener('resize', () => {
			window.innerWidth >= 768 ? setNav(true) : setNav(false);
		});
	}, []);
	return (
		<header className={s.main}>
			<section className={s['main-cont']}>
				<div className={s.main_search}>
					<BiSearch />
				</div>
				<figure className={s.main_icon}>
					<Link href={'/'}>Jshop</Link>
				</figure>
				{!nav && (
					<menu className={s['main_menu-button']} onClick={() => setNav(!nav)}>
						<BiMenu />
					</menu>
				)}
				{nav && <HeaderNav s={s} setNav={setNav} />}
			</section>
		</header>
	);
};
