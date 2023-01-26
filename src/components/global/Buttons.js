import Link from 'next/link';
import s from '../../styles/components/global/Buttons.module.css';

export const LinkButtonL = ({ href, text, classes }) => (
	<Link className={`${s.LinkButtonL} ${classes}`} href={href}>
		{text}
	</Link>
);

export const LinkButtonSL = ({ href, text, logo, classes }) => (
	<Link href={href} className={`${s.LinkButtonSL} ${classes}`}>
		{text}
		{logo}
	</Link>
);
