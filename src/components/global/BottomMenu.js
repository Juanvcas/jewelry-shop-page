import Link from 'next/link';
import { BiHome, BiCategory, BiChat, BiInfoCircle } from 'react-icons/bi';
import s from '../../styles/components/global/BottonMenu.module.css';

export const BottomMenu = () => {
	return (
		<aside className={s.main}>
			<section className={s.main_menu}>
				<Link href={'/'}>
					<BiHome />
				</Link>
				<Link href={'/'}>
					<BiCategory />
				</Link>
				<Link href={'/'}>
					<BiChat />
				</Link>
				<Link href={'/'}>
					<BiInfoCircle />
				</Link>
			</section>
		</aside>
	);
};
