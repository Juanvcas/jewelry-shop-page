import Link from 'next/link';
import s from '../../styles/components/global/Buttons.module.css';

export const LinkButtonL = ({ href, text, target, classes, click }) => (
	<Link
		href={href}
		target={target}
		className={`${s.LinkButtonL} ${classes}`}
		onClick={() => click?.function(click.value)}
	>
		{text}
	</Link>
);

export const LinkButtonSL = ({ href, target, text, logo, classes }) => (
	<Link href={href} target={target} className={`${s.LinkButtonSL} ${classes}`}>
		{text}
		{logo}
	</Link>
);
