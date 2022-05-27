import { TodoList } from '../UI/TodoCard/TodoList.styled';
import { Container } from '../UI/Grid/Container';
import Todo from './Todo';
import { ListHeadline } from '../UI/TodoCard/ListHeadline.styled';
import Dropzone1 from '../Dropzones/Dropzone1';
import useStore from '../../lib/useStore';

export default function TodoGrid() {
	const todos = useStore(state => state.todos);

	return (
		<Container>
			<Dropzone1 />
			<ListHeadline>DoIT</ListHeadline>
			<TodoList role="list">
				{todos.map((todo, index) => {
					return <Todo key={todo.id} id={todo.id} title={todo.title} index={index} />;
				})}
			</TodoList>
		</Container>
	);
}
