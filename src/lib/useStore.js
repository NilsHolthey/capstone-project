import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useStore = create(
	persist(
		set => ({
			todos: [
				{
					id: '66FIlm5YBtTFqndyPlMGA',
					title: 'Tax return 2021',
					description: 'need do do all my taxes',
					status: 'doIt',
				},
				{
					id: 'BnDYZAGVaU8MTPTkysvfU',
					title: 'Personal Website',
					description: 'I need to update my profile picture',
					status: 'doIt',
				},
				{
					id: 'TUfMKV3g0KJPa5Qiq5boa',
					title: 'Capstone Project',
					description: 'write 2 new userStories',
					status: 'doIt',
				},
			],
			didIts: [
				{
					id: 'bMrcHIV9zyJeyf2sdijq_',
					title: 'gitHub',
					description: 'update my gitHub readme',
					status: 'didIt',
				},
				{
					id: '6HW1op2QThpUiWXAD-MVK',
					title: 'Invitations',
					description: 'send invitations for Johns B-day per email',
					status: 'didIt',
				},
			],
			doingIts: [
				{
					id: 'i6b8es2cISprMyjgbg1lk',
					title: 'Gift for John',
					description: 'have to make foto collection for his birthday',
					status: 'doingIt',
				},
				{
					id: '8jMQoM3rwheGryUGdTYkS',
					title: 'Export default vs. named export',
					description: 'Modern Moose',
					status: 'doingIt',
				},
				{
					id: 'jfZ85d_kDkqEmzvdZ25Nx',
					title: 'XY presentation',
					description: 'start my presentation for work',
					status: 'doingIt',
				},
				{
					id: 'QHx9uNRvffME2qkUmPmdM',
					title: 'Single page applications',
					description: 'refactor quizz app',
					status: 'doingIt',
				},
			],
			addTodo: todo => {
				set(state => {
					return {
						todos: [{ id: nanoid(), title: todo.title }, ...state.todos],
					};
				});
			},
			moveOneUp: id => {
				set(state => {
					return {
						todos: state.todos.filter(todo => todo.id !== id),
					};
				});
			},

			moveCard: (dragIndex, hoverIndex) => {
				set(
					produce(state => {
						const item = state.todos[dragIndex];
						state.todos.splice(dragIndex, 1);
						state.todos.splice(hoverIndex, 0, item);
					})
				);
			},

			deleteTodo: id => {
				set(state => {
					return {
						todos: state.todos.filter(todo => todo.id !== id),
					};
				});
			},
		}),
		{ name: 'DidIt' }
	)
);
export default useStore;
