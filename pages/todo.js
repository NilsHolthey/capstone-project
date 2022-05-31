import React from 'react';
import dynamic from 'next/dynamic';
const TodoGrid = dynamic(() => import('../src/components/Todos/TodosGrid'), {
	ssr: false,
});

export default function Home() {
	return <TodoGrid />;
}
