import { useState } from 'react';
import Link from 'next/link';
import { useFetch } from 'hooks/useFectch';
import { endPoints } from 'services/api/endPoints';
import s from '../../styles/components/CategoryList.module.css';

export const CategoryList = () => {
	const [categories, setCategories] = useState([]);
	useFetch(endPoints.categories.getAllCategories, setCategories);
	return (
		<ul className={s.main}>
			{categories.map((category, index) => (
				<li key={index}>
					<Link href={'/'}>{category.title}</Link>
				</li>
			))}
		</ul>
	);
};
