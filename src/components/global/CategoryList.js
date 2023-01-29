import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useFetch } from 'hooks/useFectch';
import { endPoints } from 'services/api/endPoints';
import s from '@styles/components/global/CategoryList.module.css';

export const CategoryList = ({ setState }) => {
	const [categories, setCategories] = useState([]);
	useFetch(endPoints.categories.getAllCategories, setCategories);

	const router = useRouter();

	const changeCategory = (e, id) => {
		e.preventDefault();
		setState(id);
		router.push('catalog');
	};

	return (
		<ul className={s.main}>
			<li>
				<Link href={'/catalog'} onClick={(e) => changeCategory(e, 'all')}>
					Todos
				</Link>
			</li>
			{categories.map((category, index) => (
				<li key={index}>
					<Link
						href={'/catalog'}
						onClick={(e) => changeCategory(e, category.id)}
					>
						{category.title}
					</Link>
				</li>
			))}
		</ul>
	);
};
