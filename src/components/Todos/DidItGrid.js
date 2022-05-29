import { TodoList } from '../UI/TodoCard/TodoList.styled';
import { Container } from '../UI/Grid/Container';
import { ListHeadline } from '../UI/TodoCard/ListHeadline.styled';
import useStore from '../../lib/useStore';
import DidIt from './DidIt';
import DropWrapper from './DropWrapper';
import { ItemTypes } from '../UI/items';
import { useDrop } from 'react-dnd';

export default function DidItGrid() {
	const didIts = useStore(state => state.didIts);
	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,

		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	});

	return (
		<Container>
			<ListHeadline>DoIT</ListHeadline>
			<DropWrapper>
				<TodoList
					ref={drop}
					role="list"
					background={isOver ? 'rgba(178, 231, 159, 0.60)' : '#f6f6f6'}
				>
					{didIts.map((didIt, index) => {
						return (
							<DidIt key={didIt.id} id={didIt.id} title={didIt.title} index={index} />
						);
					})}
				</TodoList>
			</DropWrapper>
		</Container>
	);
}
