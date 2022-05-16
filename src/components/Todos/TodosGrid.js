import { TodoList } from '../UI/TodoCard/TodoList.styled';
import { TodoLi } from '../UI/TodoCard/TodoListItem.styled';
import { Container } from '../UI/Grid/Container';
import Todos from './Todos';
import { ListHeadline } from '../UI/TodoCard/ListHeadline.styled';

export default function TodosGrid({ todos }) {
	return (
		<Container>
			<ListHeadline>DoIT</ListHeadline>
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
