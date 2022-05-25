import { TodoList } from '../UI/TodoCard/TodoList.styled';
import { Container } from '../UI/Grid/Container';
import Todo from './Todo';
import { ListHeadline } from '../UI/TodoCard/ListHeadline.styled';

export default function DidItGrid({ didits, onDeleteTodo, index }) {
	return (
		<Container>
			<ListHeadline>DidIT</ListHeadline>
			<TodoList>
				{didits.map(didits => (
					<span key={didits.id}>
						<Todo
							id={didits.id}
							title={didits.title}
							index={index}
							onDeleteTodo={onDeleteTodo}
						/>
					</span>
				))}
			</TodoList>
		</Container>
	);
}
