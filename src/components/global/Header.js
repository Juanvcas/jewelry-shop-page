import { useState, useEffect, useContext } from 'react';
import { AppContext } from '@context/AppContext';
import Link from 'next/link';
import { BiMenu } from 'react-icons/bi';
import { HeaderNav } from './HeaderNav';
import s from '../../styles/components/global/Header.module.css';
import { SearchButton } from 'common/SearchButton';

export const Header = () => {
	const { media } = useContext(AppContext);

	const [nav, setNav] = useState(false);

	useEffect(() => {
		window.innerWidth >= 1024 ? setNav(true) : setNav(false);
		window.addEventListener('resize', () => {
			window.innerWidth >= 1024 ? setNav(true) : setNav(false);
		});
	}, []);

	return (
		<header className={s.main}>
			<section className={s['main-cont']}>
				{!media && <SearchButton style={s.main_search} />}
				<figure className={s.main_icon}>
					<Link href={'/'}>Jshop</Link>
				</figure>
				{!nav && (
					<menu className={s['main_menu-button']} onClick={() => setNav(!nav)}>
						<BiMenu />
					</menu>
				)}
				{nav && <HeaderNav style={s} setNav={setNav} media={media} />}
			</section>
		</header>
	);
};
