import Link from 'next/link';
import s from '../../styles/components/global/Buttons.module.css';

export const LinkButtonL = ({ href, text, classes, click }) => (
	<Link
		className={`${s.LinkButtonL} ${classes}`}
		href={href}
		onClick={() => click.function(click.value)}
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
