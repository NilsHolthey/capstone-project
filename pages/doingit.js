import dynamic from 'next/dynamic';
const DoinItGrid = dynamic(() => import('../src/components/Todos/DoinItGrid'), {
	ssr: false,
});

export default function DoinIt() {
	return <DoinItGrid />;
}
