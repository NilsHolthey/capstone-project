import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import useStore from '../../lib/useStore';
import SvgIcon from '../SVGs/icons';
import { DeleteButton } from '../UI/Button/DeleteButton.styled';
import { ItemTypes } from '../UI/items';
import { TodoLi } from '../UI/TodoCard/TodoListItem.styled';

export default function DidIt({ title, id, index }) {
	const moveCardDid = useStore(state => state.moveCardDid);
	const deleteDid = useStore(state => state.deleteDid);
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
				moveCardDid(dragIndex, hoverIndex);
			};
			handleMoveCard(dragIndex, hoverIndex);

			item.index = hoverIndex;
		},
	});

	const handleDelete = () => {
		deleteDid(index);
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
			data-handler-id={handlerId}
			opacity={isDragging ? 0 : 1}
			background={isOver ? '#e3e3e3' : 'white'}
		>
			{title}
			<DeleteButton onClick={handleDelete}>
				<SvgIcon variant="delete" size="20px" color="#D9D9D9" />
			</DeleteButton>
		</TodoLi>
	);
}
