import { Container } from '../UI/Grid/Container';
import { ListHeadline } from '../UI/TodoCard/ListHeadline.styled';
import DropWrapper from './DropWrapper';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../UI/items';
import { TodoList } from '../UI/TodoCard/TodoList.styled';

export default function GenericGrid({ headline, todoList, dropzone, TodoComponent }) {
	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,

		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	});

	return (
		<Container>
			{dropzone}
			<ListHeadline>{headline}</ListHeadline>
			<DropWrapper>
				<TodoList
					ref={drop}
					role="list"
					background={isOver ? 'rgba(178, 231, 159, 0.60)' : '#f6f6f6'}
				>
					{todoList.map((todo, index) => {
						return (
							<TodoComponent
								key={todo.id}
								id={todo.id}
								title={todo.title}
								description={todo.description}
								deadline={todo.deadline}
								level={todo.level}
								index={index}
							/>
						);
					})}
				</TodoList>
			</DropWrapper>
		</Container>
	);
}
