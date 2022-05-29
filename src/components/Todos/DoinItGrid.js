import { TodoList } from '../UI/TodoCard/TodoList.styled';
import { Container } from '../UI/Grid/Container';
import DoingIt from './DoingIt';
import { ListHeadline } from '../UI/TodoCard/ListHeadline.styled';
import Dropzone2 from '../Dropzones/Dropzone2';
import useStore from '../../lib/useStore';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../UI/items';
import DropWrapper from './DropWrapper';

export default function DoinItGrid() {
	const doingIts = useStore(state => state.doingIts);
	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,

		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	});

	return (
		<Container>
			<Dropzone2 />
			<ListHeadline>DoIT</ListHeadline>
			<DropWrapper>
				<TodoList
					ref={drop}
					role="list"
					background={isOver ? 'rgba(178, 231, 159, 0.60)' : '#f6f6f6'}
				>
					{doingIts.map((doingIt, index) => {
						return (
							<DoingIt
								key={doingIt.id}
								id={doingIt.id}
								title={doingIt.title}
								index={index}
							/>
						);
					})}
				</TodoList>
			</DropWrapper>
		</Container>
	);
}
