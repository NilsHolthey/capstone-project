import { Container } from '../UI/Grid/Container';
import DropWrapper from './DropWrapper';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../UI/items';
import { TodoList } from '../UI/TodoCard/TodoList.styled';
import { DropzoneWrapper } from '../UI/Dropzone/DropzoneWrapper.styled';
import { useRouter } from 'next/router';

export default function GenericGrid({
	svgLeft,
	svgCenter,
	svgRight,
	todoList,
	dropzone,
	dropzoneBack,
	TodoComponent,
}) {
	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,

		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	});
	const router = useRouter();

	return (
		<Container>
			<DropzoneWrapper pathName={router.pathname}>
				{svgLeft}
				{dropzoneBack}
				{svgCenter}
				{svgRight}
				{dropzone}
			</DropzoneWrapper>

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
