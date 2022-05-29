import { TodoList } from '../UI/TodoCard/TodoList.styled';
import { Container } from '../UI/Grid/Container';
import Todo from './Todo';
import { ListHeadline } from '../UI/TodoCard/ListHeadline.styled';
import Dropzone1 from '../Dropzones/Dropzone1';
import useStore from '../../lib/useStore';
import DropWrapper from './DropWrapper';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../UI/items';

export default function TodoGrid() {
	const todos = useStore(state => state.todos);
	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,

		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	});

	return (
		<Container>
			<Dropzone1 />
			<ListHeadline>DoIT</ListHeadline>
			<DropWrapper>
				<TodoList
					ref={drop}
					role="list"
					background={isOver ? 'rgba(178, 231, 159, 0.60)' : '#f6f6f6'}
				>
					{todos.map((todo, index) => {
						return <Todo key={todo.id} id={todo.id} title={todo.title} index={index} />;
					})}
				</TodoList>
			</DropWrapper>
		</Container>
	);
}
