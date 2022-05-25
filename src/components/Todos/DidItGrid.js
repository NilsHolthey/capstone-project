import { TodoList } from '../UI/TodoCard/TodoList.styled';
import { Container } from '../UI/Grid/Container';
import Todo from './Todo';
import { ListHeadline } from '../UI/TodoCard/ListHeadline.styled';

export default function DidItGrid({ todos, onDeleteTodo, index }) {
	return (
		<Container>
			<ListHeadline>DidIT</ListHeadline>
			<TodoList>
				{todos
					.filter(todo => todo.status === 'didIt')
					.map(todo => (
						<span key={todo.id}>
							<Todo
								id={todo.id}
								title={todo.title}
								index={index}
								onDeleteTodo={onDeleteTodo}
							/>
						</span>
					))}
			</TodoList>
		</Container>
	);
}
