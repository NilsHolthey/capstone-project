import DoinItGrid from '../src/components/Todos/DoinItGrid';
import { getTodos } from '../src/services/get-todos';

export function getStaticProps() {
	const todos = getTodos();

	return {
		props: {
			todos,
		},
	};
}

export default function DoinIt({ todos }) {
	return <DoinItGrid todos={todos} />;
}
