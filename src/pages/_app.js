import { Header } from '../components/global/Header';
import { BottomMenu } from '@components/global/BottomMenu';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<BottomMenu />
		</>
	);
}
