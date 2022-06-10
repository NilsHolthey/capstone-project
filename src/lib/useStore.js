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
					deadline: '2022-11-22',
					level: 'medium',
				},
				{
					id: 'BnDYZAGVaU8MTPTkysvfU',
					title: 'Personal Website',
					description: 'I need to update my profile picture',
					deadline: '2022-11-22',
					level: 'easy',
				},
				{
					id: 'TUfMKV3g0KJPa5Qiq5boa',
					title: 'Capstone Project',
					description: 'write 2 new userStories',
					deadline: '2022-06-09',
					level: 'hard',
				},
			],
			didIts: [
				{
					id: 'bMrcHIV9zyJeyf2sdijq_',
					title: 'gitHub',
					description: 'update my gitHub readme',
					deadline: '2022-07-02',
					level: 'easy',
				},
				{
					id: '6HW1op2QThpUiWXAD-MVK',
					title: 'Invitations',
					description: 'send invitations for Johns B-day per email',
					deadline: '2022-11-22',
					level: 'hard',
				},
			],
			doingIts: [
				{
					id: 'i6b8es2cISprMyjgbg1lk',
					title: 'Gift for John',
					description: 'have to make foto collection for his birthday',
					deadline: '2022-11-22',
					level: 'hard',
				},
				{
					id: '8jMQoM3rwheGryUGdTYkS',
					title: 'Export default vs. named export',
					description: 'Modern Moose',
					deadline: '2022-11-22',
					level: 'easy',
				},
				{
					id: 'jfZ85d_kDkqEmzvdZ25Nx',
					title: 'XY presentation',
					description: 'start my presentation for work',
					deadline: '2022-11-22',
					level: 'hard',
				},
				{
					id: 'QHx9uNRvffME2qkUmPmdM',
					title: 'Single page applications',
					description: 'refactor quizz app',
					deadline: '2022-11-22',
					level: 'easy',
				},
			],
			addTodo: todo => {
				set(
					produce(draft => {
						draft.todos.push({
							id: nanoid(),
							title: todo.title,
							description: todo.description,
							deadline: todo.deadline,
							level: todo.level,
						});
					})
				);
			},

			moveToDidIt: index => {
				set(
					produce(draft => {
						const todo = draft.doingIts[index];
						draft.doingIts.splice(index, 1);
						draft.didIts.splice(index, 0, todo);
					})
				);
			},
			SendBackToDoingIt: index => {
				set(
					produce(draft => {
						const todo = draft.didIts[index];
						draft.didIts.splice(index, 1);
						draft.doingIts.splice(index, 0, todo);
					})
				);
			},
			SendBackToDoIt: index => {
				set(
					produce(draft => {
						const todo = draft.doingIts[index];
						draft.doingIts.splice(index, 1);
						draft.todos.splice(index, 0, todo);
					})
				);
			},

			moveToDoingIt: index => {
				set(
					produce(draft => {
						const todo = draft.todos[index];
						draft.todos.splice(index, 1);
						draft.doingIts.splice(index, 0, todo);
					})
				);
			},

			moveCard: (dragIndex, hoverIndex) => {
				set(
					produce(draft => {
						const todo = draft.todos[dragIndex];
						draft.todos.splice(dragIndex, 1);
						draft.todos.splice(hoverIndex, 0, todo);
					})
				);
			},

			moveCardDo: (dragIndex, hoverIndex) => {
				set(
					produce(draft => {
						const doingIt = draft.doingIts[dragIndex];
						draft.doingIts.splice(dragIndex, 1);
						draft.doingIts.splice(hoverIndex, 0, doingIt);
					})
				);
			},
			moveCardDid: (dragIndex, hoverIndex) => {
				set(
					produce(draft => {
						const didIt = draft.didIts[dragIndex];
						draft.didIts.splice(dragIndex, 1);
						draft.didIts.splice(hoverIndex, 0, didIt);
					})
				);
			},

			deleteTodo: index => {
				set(
					produce(draft => {
						draft.todos.splice(index, 1);
					})
				);
			},
			deleteDo: index => {
				set(
					produce(draft => {
						draft.doingIts.splice(index, 1);
					})
				);
			},
			deleteDid: index => {
				set(
					produce(draft => {
						draft.didIts.splice(index, 1);
					})
				);
			},
		}),
		{ name: 'DidIt' }
	)
);
export default useStore;
