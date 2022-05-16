import { TodoList } from '../UI/TodoCard/TodoList.styled';
import { TodoLi } from '../UI/TodoCard/TodoListItem.styled';
import { Container } from '../UI/Grid/Container';
import Todos from './Todos';

export default function TodosGrid({ todos }) {
	return (
		<Container>
			<TodoList role="list">
				{todos
					.filter(todos => todos.status === 'doIt')
					.map(todos => (
						<TodoLi key={todos.id}>
							<Todos title={todos.title} />
						</TodoLi>
					))}
			</TodoList>
		</Container>
	);
}
