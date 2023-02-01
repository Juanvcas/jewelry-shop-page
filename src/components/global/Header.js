import { useState, useEffect, useContext } from 'react';
import { AppContext } from '@context/AppContext';
import Link from 'next/link';
import { BiSearch, BiMenu } from 'react-icons/bi';
import { HeaderNav } from './HeaderNav';
import s from '../../styles/components/global/Header.module.css';

export const Header = () => {
	const { searchModal, setSearchModal } = useContext(AppContext);

	const [nav, setNav] = useState(false);

	useEffect(() => {
		window.innerWidth >= 768 ? setNav(true) : setNav(false);
		window.addEventListener('resize', () => {
			window.innerWidth >= 768 ? setNav(true) : setNav(false);
		});
	}, []);

	return (
		<header className={s.main}>
			<section className={s['main-cont']}>
				<span
					className={s.main_search}
					onClick={() => setSearchModal(!searchModal)}
				>
					<BiSearch />
				</span>
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
