import Link from 'next/link';

export const MainNav = () => (
	<ul>
		<li>
			<Link href={'/'}>Inicio</Link>
		</li>
		<li>
			<Link href={'/catalog'}>Catálogo</Link>
		</li>
		<li>
			<Link href={'/bookmarks'}>Bookmarks</Link>
		</li>
		<li>
			<Link href={'/about'}>Nosotros</Link>
		</li>
	</ul>
);
