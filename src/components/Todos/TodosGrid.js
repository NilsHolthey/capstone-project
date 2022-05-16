import { TodoList } from '../UI/TodoCard/TodoList.styled';
import { TodoLi } from '../UI/TodoCard/TodoListItem.styled';
import { TodoContainer } from '../UI/TodoGrid/TodoContainer';
import { ToDoNav } from '../UI/TodoGrid/TodoNav.styled';
import Todos from './Todos';

export default function TodosGrid({ todos }) {
	return (
		<TodoContainer>
			<ToDoNav>DoIT</ToDoNav>
			<TodoList>
				{todos
					.filter(todos => todos.status === 'doIt')
					.map(todos => (
						<TodoLi key={todos.id}>
							<Todos title={todos.title} />
						</TodoLi>
					))}
			</TodoList>
		</TodoContainer>
	);
}
