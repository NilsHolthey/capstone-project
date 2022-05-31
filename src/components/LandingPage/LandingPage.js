import { useRouter } from 'next/router';
import { Container } from '../../components/UI/Landingpage/Container.styled';
import SvgIcon from '../SVGs/icons';
import { StartButton } from '../UI/Button/StartButton.style';
import { Card } from '../UI/Landingpage/Card.styled';
import { LogoContainer } from '../UI/Landingpage/LogoContainer.styled';
import LogoAnimation from './Logo';

export default function LandingPage() {
	const router = useRouter();
	const handleClick = () => {
		router.push('/todo');
	};
	return (
		<Container pathName={router.pathname}>
			<article>
				<Card top="-11px" left="-30px">
					{' '}
				</Card>
				<Card top="-55px" right="21px">
					{' '}
				</Card>
				<Card top="-15px" right="65px">
					{' '}
				</Card>
				<Card top="-20px" left="65px">
					{' '}
				</Card>
				<Card top="-25px" left="135px" opacity="0.2" width="20vw" height="15vh">
					{' '}
				</Card>
				<Card top="30px" left="50px" opacity="0.2">
					{' '}
				</Card>
				<Card top="45px" right="0px" opacity="0.2">
					{' '}
				</Card>
				<Card top="55px" right="75px" opacity="0.2">
					{' '}
				</Card>
				<Card top="70px" left="25px" opacity="0.2">
					{' '}
				</Card>
				<Card top="25px" left="135px" opacity="0.2" width="20vw" height="15vh">
					{' '}
				</Card>
				<Card bottom="25px" left="110px">
					{' '}
				</Card>
				<Card bottom="50px" left="50px">
					{' '}
				</Card>
				<Card bottom="75px" right="25px">
					{' '}
				</Card>
				<Card bottom="55px" right="75px">
					{' '}
				</Card>
				<Card bottom="70px" left="25px">
					{' '}
				</Card>
				<Card bottom="120px" left="125px">
					{' '}
				</Card>
				<Card bottom="150px" right="100px">
					{' '}
				</Card>
			</article>
			<LogoContainer>
				<LogoAnimation />
			</LogoContainer>
			<StartButton type="button" onClick={handleClick}>
				Start
				<SvgIcon variant="chevronRightCircle" size="30px" color="#f6f6f6" />
			</StartButton>
		</Container>
	);
}
