import Link from 'next/link';
import { MainNav } from 'common/MainNav';
import s from '@styles/components/global/Footer.module.css';

export const Footer = () => {
	return (
		<footer className={s.main}>
			<section className={s.main_nav}>
				<MainNav />
				<div className={s.nav_info}>
					<p>Contáctanos:</p>
					<p>
						<b>Cel:</b> +57 XXX XXX XX XX
					</p>
					<p>
						<b>Tel:</b> 604 XXX XX XX
					</p>
					<p>
						<b>Dirección:</b>
						<br /> Carrera ## ##-## ...
					</p>
				</div>
			</section>
			<section className={s.main_credits}>
				<p>
					made by:{' '}
					<Link
						href={'https://juanvcas.com'}
						target={'_blank'}
						title={'juanvcas.com'}
					>
						Juan Vasquez
					</Link>
				</p>
			</section>
		</footer>
	);
};
