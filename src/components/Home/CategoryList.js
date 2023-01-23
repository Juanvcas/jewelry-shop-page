import Link from 'next/link';
import s from '../../styles/components/CategoryList.module.css';

export const CategoryList = () => {
	return (
		<ul className={s.main}>
			<li>
				<Link href={'/'}>Rings</Link>
			</li>
			<li>
				<Link href={'/'}>Esrrings</Link>
			</li>
			<li>
				<Link href={'/'}>Necklaces</Link>
			</li>
			<li>
				<Link href={'/'}>Bracelets</Link>
			</li>
			<li>
				<Link href={'/'}>Ankle Braces</Link>
			</li>
		</ul>
	);
};
