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
			moveTwoUp: index => {
				set(
					produce(state => {
						const todo = state.doingIts[index];
						state.doingIts.splice(index, 1);
						state.didIts.splice(index, 0, todo);
					})
				);
			},

			moveOneUp: index => {
				set(
					produce(state => {
						const todo = state.todos[index];
						state.todos.splice(index, 1);
						state.doingIts.splice(index, 0, todo);
					})
				);
			},

			moveCard: (dragIndex, hoverIndex) => {
				set(
					produce(state => {
						const todo = state.todos[dragIndex];
						state.todos.splice(dragIndex, 1);
						state.todos.splice(hoverIndex, 0, todo);
					})
				);
			},

			moveCardDo: (dragIndex, hoverIndex) => {
				set(
					produce(state => {
						const doingIt = state.doingIts[dragIndex];
						state.doingIts.splice(dragIndex, 1);
						state.doingIts.splice(hoverIndex, 0, doingIt);
					})
				);
			},
			moveCardDid: (dragIndex, hoverIndex) => {
				set(
					produce(state => {
						const didIt = state.didIts[dragIndex];
						state.didIts.splice(dragIndex, 1);
						state.didIts.splice(hoverIndex, 0, didIt);
					})
				);
			},

			deleteTodo: index => {
				set(
					produce(state => {
						state.todos.splice(index, 1);
					})
				);
			},
			deleteDo: index => {
				set(
					produce(state => {
						state.doingIts.splice(index, 1);
					})
				);
			},
			deleteDid: index => {
				set(
					produce(state => {
						state.didIts.splice(index, 1);
					})
				);
			},
		}),
		{ name: 'DidIt' }
	)
);
export default useStore;
