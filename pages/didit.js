import dynamic from 'next/dynamic';
const DidItGrid = dynamic(() => import('../src/components/Todos/DidItGrid'), {
	ssr: false,
});

export default function DidIt() {
	return <DidItGrid />;
}
