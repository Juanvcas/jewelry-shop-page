import { MainNav } from 'common/MainNav';
import { SearchButton } from 'common/SearchButton';
import { BiX, BiSearch } from 'react-icons/bi';

export const HeaderNav = ({ style, setNav, media }) => {
	const closeNav = () => {
		setNav && window.innerWidth <= 1024 && setNav(false);
	};
	return (
		<nav className={style.main_nav} onClick={closeNav}>
			<span className={style.nav_close} onClick={closeNav}>
				<BiX />
			</span>
			<MainNav />
			{media && <SearchButton />}
		</nav>
	);
};
