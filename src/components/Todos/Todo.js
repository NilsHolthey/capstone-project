import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import useStore from '../../lib/useStore';
import SvgIcon from '../SVGs/icons';
import { DeleteButton } from '../UI/Button/DeleteButton.styled';
import { ItemTypes } from '../UI/items';
import { TodoLi } from '../UI/TodoCard/TodoListItem.styled';

export default function Todo({ title, id, index }) {
	const moveCard = useStore(state => state.moveCard);

	const ref = useRef(null);
	const [{ handlerId }, drop] = useDrop({
		accept: ItemTypes.CARD,
		collect(monitor) {
			return {
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

	const deleteTodo = useStore(state => state.deleteTodo);
	const handleDelete = () => {
		deleteTodo(id);
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
	const opacity = isDragging ? 0 : 1;

	return (
		<TodoLi ref={ref} style={{ opacity }} data-handler-id={handlerId}>
			{title}
			<DeleteButton onClick={handleDelete}>
				<SvgIcon variant="delete" size="20px" color="#D9D9D9" />
			</DeleteButton>
		</TodoLi>
	);
}
