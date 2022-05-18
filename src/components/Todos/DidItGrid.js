import { TodoList } from '../UI/TodoCard/TodoList.styled';
import { TodoLi } from '../UI/TodoCard/TodoListItem.styled';
import { Container } from '../UI/Grid/Container';
import Todo from './Todo';
import { ListHeadline } from '../UI/TodoCard/ListHeadline.styled';

export default function DidItGrid({ todos }) {
	return (
		<Container>
			<ListHeadline>DidIT</ListHeadline>
			<TodoList role="list">
				{todos
					.filter(todo => todo.status === 'didIt')
					.map(todo => (
						<TodoLi key={todo.id}>
							<Todo title={todo.title} />
						</TodoLi>
					))}
			</TodoList>
		</Container>
	);
}
