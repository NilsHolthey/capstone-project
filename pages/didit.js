import DidItGrid from '../src/components/Todos/DidItGrid';
import { getTodos } from '../src/services/get-todos';

export function getStaticProps() {
	const todos = getTodos();

	return {
		props: {
			todos,
		},
	};
}

export default function DidIt({ todos }) {
	return <DidItGrid todos={todos} />;
}
