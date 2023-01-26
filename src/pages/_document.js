import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='es'>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				{/* Fonts */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital@0;1&family=Montserrat:ital,wght@0,300;0,500;1,300;1,500&display=swap'
					rel='stylesheet'
				></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
