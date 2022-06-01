import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import SvgIcon from '../SVGs/icons';
import { DeleteButton } from '../UI/Button/DeleteButton.styled';
import { ItemTypes } from '../UI/items';
import { TodoLi } from '../UI/TodoCard/TodoListItem.styled';

export default function GenericTodo({
	title,
	deadline,
	description,
	id,
	index,
	moveCard,
	deleteTodo,
}) {
	const ref = useRef(null);
	const [{ handlerId, isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,
		collect(monitor) {
			return {
				isOver: monitor.isOver(),
				handlerId: monitor.getHandlerId(),
			};
		},
		hover(item, monitor) {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;

			if (dragIndex === hoverIndex) {
				return;
			}

			const hoveredRect = ref.current.getBoundingClientRect();
			const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
			const mousePosition = monitor.getClientOffset();
			const hoverClientY = mousePosition.y - hoveredRect.top;

			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}

			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			const handleMoveCard = (dragIndex, hoverIndex) => {
				moveCard(dragIndex, hoverIndex);
			};
			handleMoveCard(dragIndex, hoverIndex);

			item.index = hoverIndex;
		},
	});
	const handleDelete = () => {
		deleteTodo(index);
	};

	const [{ isDragging }, drag] = useDrag({
		type: ItemTypes.CARD,
		item: () => {
			return { id, index };
		},
		collect: monitor => ({
			isDragging: monitor.isDragging(),
		}),
	});
	drag(drop(ref));

	return (
		<TodoLi
			ref={ref}
			opacity={isDragging ? 0 : 1}
			data-handler-id={handlerId}
			background={isOver ? '#e3e3e3' : 'white'}
		>
			<p>{title}</p>
			<p>{deadline}</p>
			<p>{description}</p>
			<DeleteButton onClick={handleDelete}>
				<SvgIcon variant="delete" size="20px" color="#D9D9D9" />
			</DeleteButton>
		</TodoLi>
	);
}
