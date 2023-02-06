import { AppProvider } from 'context/AppContext';
import { Header } from '../components/global/Header';
import { Footer } from '@components/global/Footer';
import { BottomMenu } from '@components/global/BottomMenu';
import MainContainer from 'Containers/MainContainer';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<AppProvider>
			<MainContainer>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</MainContainer>
		</AppProvider>
	);
}
