import Link from 'next/link';
import { BiX } from 'react-icons/bi';

export const HeaderNav = ({ s, setNav }) => {
	const closeNav = () => {
		window.innerWidth <= 768 && setNav(false);
	};
	return (
		<nav className={s.main_nav} onClick={closeNav}>
			<ul>
				<span className={s.nav_close} onClick={closeNav}>
					<BiX />
				</span>
				<li>
					<Link href={'/'}>Inicio</Link>
				</li>
				<li>
					<Link href={'/catalog'}>Catálogo</Link>
				</li>
				<li>
					<Link href={'/bookmarks'}>Bookmarks</Link>
				</li>
				<li>
					<Link href={'/'}>Nosotros</Link>
				</li>
			</ul>
		</nav>
	);
};
