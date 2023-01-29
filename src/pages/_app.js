import { AppProvider } from 'context/AppContext';
import { Header } from '../components/global/Header';
import { BottomMenu } from '@components/global/BottomMenu';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<AppProvider>
			<Header />
			<Component {...pageProps} />
			<BottomMenu />
		</AppProvider>
	);
}
