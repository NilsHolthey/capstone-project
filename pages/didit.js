import dynamic from 'next/dynamic';
import { getDidits } from '../src/services/get-didIts';
const DidItGrid = dynamic(() => import('../src/components/Todos/DidItGrid'), {
	ssr: false,
});
export function getStaticProps() {
	const initialDidits = getDidits();

	return {
		props: {
			initialDidits,
		},
	};
}

export default function DidIt() {
	return <DidItGrid />;
}
