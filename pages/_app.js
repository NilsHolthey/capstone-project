import Layout from '../src/components/Layout/Layout';
import GlobalStyle from '../src/components/UI/GlobalStyles';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
