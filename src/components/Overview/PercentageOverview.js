import { CircularProgressDo } from '../UI/PercentageOverview/CircularProgressDo.styled';
import { Container } from '../UI/PercentageOverview/Container';
import { CircleTodo } from '../UI/PercentageOverview/CircleTodo.styled';
import { CircleTodoBg } from '../UI/PercentageOverview/CircleTodoBg.styled';
import { CircleText } from '../UI/PercentageOverview/CircleText.Styled';
import { useEffect, useState } from 'react';

export default function PercentageOverview({
	boxShadow,
	size,
	strokeWidth,
	percentage,
	color,
	bgColor,
	headline,
}) {
	const [progress, setProgress] = useState(0);
	useEffect(() => {
		setProgress(percentage);
	}, [percentage]);

	const viewBox = `0 0 ${size} ${size}`;
	const radius = (size - strokeWidth) / 2;
	const circumference = radius * Math.PI * 2;
	const dash = (progress * circumference) / 100;

	return (
		<Container boxShadow={boxShadow}>
			<h4>{headline}</h4>
			<CircularProgressDo width={size} height={size} viewBox={viewBox}>
				<CircleTodoBg
					fill="none"
					stroke={bgColor}
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={`${strokeWidth}px`}
				/>
				<CircleTodo
					fill="none"
					stroke={color}
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={`${strokeWidth}px`}
					transform={`rotate(-90 ${size / 2} ${size / 2})`}
					strokeDasharray={[dash, circumference - dash]}
				/>
				<CircleText x="50%" y="50%">
					{`${percentage}%`}
				</CircleText>
			</CircularProgressDo>
		</Container>
	);
}
