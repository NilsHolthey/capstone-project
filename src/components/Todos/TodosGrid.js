import { TodoList } from '../UI/TodoCard/TodoList.styled';
import { TodoLi } from '../UI/TodoCard/TodoListItem.styled';
import { Container } from '../UI/Grid/Container';
import Todo from './Todo';
import { ListHeadline } from '../UI/TodoCard/ListHeadline.styled';

export default function TodosGrid({ todos, onDeleteTodo }) {
	return (
		<Container>
			<ListHeadline>DoIT</ListHeadline>
			<TodoList role="list">
				{todos
					.filter(todo => todo.status === 'doIt')
					.map(todo => (
						<TodoLi key={todo.id}>
							<Todo id={todo.id} title={todo.title} onDeleteTodo={onDeleteTodo} />
						</TodoLi>
					))}
			</TodoList>
		</Container>
	);
}
