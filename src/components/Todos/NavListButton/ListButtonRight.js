import { useEffect, useState } from 'react';
import SvgIcon from '../../SVGs/icons';
import { ListButtonR } from '../../UI/Button/ListButtonR.styled';

export default function ListButtonRight({ handleClick }) {
	const [show, setShow] = useState(false);
	const controlButton = () => {
		if (window.scrollY > 50) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', controlButton);
		return () => {
			window.removeEventListener('scroll', controlButton);
		};
	}, []);
	return (
		<div>
			{show && (
				<ListButtonR type="button" onClick={handleClick}>
					<SvgIcon variant="chevronRightCircleOutline" size="45px" color="#6667ab" />
				</ListButtonR>
			)}
		</div>
	);
}
