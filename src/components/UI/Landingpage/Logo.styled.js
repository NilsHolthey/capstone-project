import styled from 'styled-components';

export const Logo = styled.svg`
	animation: jump 1s ease-in-out 3.6s;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	path:nth-child(2) {
		stroke-dasharray: 25;
		stroke-dashoffset: 25;
		animation: lineAnimation 1s ease forwards 2.4s;
	}
	path:nth-child(3) {
		stroke-dasharray: 25;
		stroke-dashoffset: 25;
		animation: lineAnimation 1s ease forwards 2.8s;
	}
	path:nth-child(4) {
		stroke-dasharray: 25;
		stroke-dashoffset: 25;
		animation: lineAnimation 1s ease forwards 3.1s;
	}
	path:nth-child(5) {
		stroke-dasharray: 477;
		stroke-dashoffset: 477;
		animation: lineAnimation 2s ease forwards 0.9s;
	}
	path:nth-child(6) {
		stroke-dasharray: 138;
		stroke-dashoffset: 138;
		animation: lineAnimation 2s ease forwards 1.2s;
	}
	path:nth-child(7) {
		stroke-dasharray: 243;
		stroke-dashoffset: 243;
		animation: lineAnimation 2s ease forwards 1.5s;
	}
	path:nth-child(8) {
		stroke-dasharray: 138;
		stroke-dashoffset: 138;
		animation: lineAnimation 2s ease forwards 1.8s;
	}
	path:nth-child(9) {
		stroke-dasharray: 182;
		stroke-dashoffset: 182;
		animation: lineAnimation 2s ease forwards 2.1s;
	}

	@keyframes lineAnimation {
		to {
			stroke-dashoffset: 0;
		}
	}

	@keyframes jump {
		0% {
			transform: translate(-50%, -50%) scale(1.15, 0.75);
		}
		50% {
			transform: translate(-50%, -90%) scale(1, 1);
		}
	}
`;
