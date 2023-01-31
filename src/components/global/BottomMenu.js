import { useContext } from 'react';
import { AppContext } from '@context/AppContext';
import Link from 'next/link';
import { BiHome, BiCategory, BiChat, BiBookmarks } from 'react-icons/bi';
import s from '../../styles/components/global/BottonMenu.module.css';

export const BottomMenu = () => {
	const { setCatalogList } = useContext(AppContext);
	return (
		<aside className={s.main}>
			<section className={s.main_menu}>
				<Link href={'/'}>
					<BiHome />
				</Link>
				<Link href={'/catalog'} onClick={() => setCatalogList('all')}>
					<BiCategory />
				</Link>
				<Link href={'/bookmarks'}>
					<BiBookmarks />
				</Link>
				<Link
					href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUM}`}
					target={'_blank'}
				>
					<BiChat />
				</Link>
			</section>
		</aside>
	);
};
