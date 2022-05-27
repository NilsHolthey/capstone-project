import dynamic from 'next/dynamic';
import { getDoingIts } from '../src/services/get-doingIts';
const DoinItGrid = dynamic(() => import('../src/components/Todos/DoinItGrid'), {
	ssr: false,
});
export function getStaticProps() {
	const initialDoingIts = getDoingIts();

	return {
		props: {
			initialDoingIts,
		},
	};
}

export default function DoinIt() {
	return <DoinItGrid />;
}
