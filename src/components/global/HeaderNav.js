import { useEffect } from 'react';
import Link from 'next/link';
import { BiX } from 'react-icons/bi';

export const HeaderNav = ({ s, setNav }) => {
	const closeNav = () => {
		window.innerWidth <= 768 && setNav(false);
	};
	useEffect(() => {
		window.innerWidth >= 768 && setNav(true);
	});
	return (
		<nav className={s.main_nav} onClick={closeNav}>
			<ul>
				<span className={s.nav_close} onClick={closeNav}>
					<BiX />
				</span>
				<li>
					<Link href={'/'}>Catálogo</Link>
				</li>
				<li>
					<Link href={'/'}>About</Link>
				</li>
			</ul>
		</nav>
	);
};
