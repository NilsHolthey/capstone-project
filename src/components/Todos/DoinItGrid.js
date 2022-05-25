import { TodoList } from '../UI/TodoCard/TodoList.styled';

import { Container } from '../UI/Grid/Container';
import Todo from './Todo';
import { ListHeadline } from '../UI/TodoCard/ListHeadline.styled';

export default function DoinItGrid({ doingIts, onDeleteTodo, index }) {
	return (
		<Container>
			<ListHeadline>DoingIT</ListHeadline>
			<TodoList>
				{doingIts.map(doingIt => (
					<span key={doingIt.id}>
						<Todo
							id={doingIt.id}
							title={doingIt.title}
							index={index}
							onDeleteTodo={onDeleteTodo}
						/>
					</span>
				))}
			</TodoList>
		</Container>
	);
}
