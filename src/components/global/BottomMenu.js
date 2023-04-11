import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from '@context/AppContext';
import Link from 'next/link';
import { BiHome, BiCategory, BiChat, BiBookmarks } from 'react-icons/bi';
import s from '../../styles/components/global/BottonMenu.module.css';

export const BottomMenu = () => {
	const { setCatalogList } = useContext(AppContext);

	const [current, setCurrent] = useState();

	const router = useRouter();

	useEffect(() => {
		const origin = window.location.origin;
		const local = window.location.href;
		if (local === `${origin}/`) {
			setCurrent('home');
		} else if (local === `${origin}/catalog`) {
			setCurrent('catalog');
		} else if (local === `${origin}/bookmarks`) {
			setCurrent('bookmarks');
		}
	}, [router]);

	return (
		<aside className={s.main}>
			<section className={s.main_menu}>
				<Link href={'/'} className={current === 'home' && s.current}>
					<BiHome />
				</Link>
				<Link
					href={'/catalog'}
					onClick={() => setCatalogList('all')}
					className={current === 'catalog' && s.current}
				>
					<BiCategory />
				</Link>
				<Link
					href={'/bookmarks'}
					className={current === 'bookmarks' && s.current}
				>
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
