import React from 'react';
import { getTodos } from '../src/services/get-todos';
import dynamic from 'next/dynamic';
const TodoGrid = dynamic(() => import('../src/components/Todos/TodosGrid'), {
	ssr: false,
});
export function getStaticProps() {
	const initialTodos = getTodos();

	return {
		props: {
			initialTodos,
		},
	};
}

export default function Home() {
	return <TodoGrid />;
}
