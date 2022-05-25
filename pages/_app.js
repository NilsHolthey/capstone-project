import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Layout from '../src/components/Layout/Layout';
import GlobalStyle from '../src/components/UI/GlobalStyles';

function MyApp({ Component, pageProps }) {
	return (
		<DndProvider backend={HTML5Backend}>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</DndProvider>
	);
}

export default MyApp;
