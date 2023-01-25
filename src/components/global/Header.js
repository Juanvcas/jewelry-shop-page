import { useState } from 'react';
import { BiSearch, BiMenu } from 'react-icons/bi';
import { HeaderNav } from './HeaderNav';
import s from '../../styles/components/global/Header.module.css';

export const Header = () => {
	const [nav, setNav] = useState(false);
	return (
		<header className={s.main}>
			<div className={`${s['main-cont']} content-limit`}>
				<section className={s.main_search}>
					<span>
						<BiSearch />
					</span>
				</section>
				<figure className={s.main_icon}>
					<span>Jshop</span>
				</figure>
				<menu className={s['main_menu-button']} onClick={() => setNav(!nav)}>
					<BiMenu />
				</menu>
				{nav && <HeaderNav s={s} setNav={setNav} />}
			</div>
		</header>
	);
};
