import React from 'react';
import PercentageOverview from './PercentageOverview';
import { useRouter } from 'next/router';
import { Wrapper } from '../UI/PercentageOverview/Wrapper.styled';
import useStore from '../../lib/useStore';
import { NavButton } from '../UI/Button/NavButton.styled';
import SvgIcon from '../SVGs/icons';
import ChartIllustration from '../SVGs/illustrations/illustrations';
export default function OverviewGrid() {
	const didIts = useStore(state => state.didIts);
	const todos = useStore(state => state.todos);
	const doingIts = useStore(state => state.doingIts);

	const lengthOfTodos = todos.length;
	const legthOfDoingIts = doingIts.length;
	const lengthOfDidIts = didIts.length;
	const sumOfArrays = lengthOfTodos + legthOfDoingIts + lengthOfDidIts;

	const progressTodo = Math.round(
		(lengthOfTodos / (lengthOfTodos + legthOfDoingIts + lengthOfDidIts)) * 100
	);
	const progressDoingIts = Math.round(
		(legthOfDoingIts / (lengthOfTodos + legthOfDoingIts + lengthOfDidIts)) * 100
	);
	const progressDidIts = Math.round(
		(lengthOfDidIts / (lengthOfTodos + legthOfDoingIts + lengthOfDidIts)) * 100
	);

	const handleClick = () => {
		router.push('/todo');
	};
	const router = useRouter();

	return (
		<Wrapper>
			<ChartIllustration />
			<NavButton type="button" onClick={handleClick}>
				<SvgIcon variant="chevronLeftCircle" size="28px" color="#6667ab" />
			</NavButton>
			<PercentageOverview
				boxShadow="0 0 4px 0 rgba(133, 161, 172, 0.30)"
				percentage={progressTodo}
				size={100}
				strokeWidth={10}
				bgColor="rgba(133, 161, 172, 0.20)"
				color="#85A1AC"
				headline="DoIT"
				sum={sumOfArrays}
				proportion={lengthOfTodos}
			/>
			<PercentageOverview
				boxShadow="0 0 4px 0 rgba(233, 67, 94, 0.30)"
				percentage={progressDoingIts}
				size={100}
				strokeWidth={10}
				bgColor="rgba(233, 67, 94, 0.20)"
				color="#E9435E"
				headline="DoingIT"
				sum={sumOfArrays}
				proportion={legthOfDoingIts}
			/>
			<PercentageOverview
				boxShadow="0 0 4px 0 rgba(71, 153, 107, 0.30)"
				percentage={progressDidIts}
				size={100}
				strokeWidth={10}
				bgColor="rgba(71, 153, 107, 0.20)"
				color="#47996B"
				headline="DidIT"
				sum={sumOfArrays}
				proportion={lengthOfDidIts}
			/>
		</Wrapper>
	);
}
