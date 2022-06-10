import { useEffect, useState } from 'react';
import SvgIcon from '../../SVGs/icons';
import { ListButtonL } from '../../UI/Button/ListButtonL.styled';

export default function ListButtonLeft({ handleClick }) {
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
				<ListButtonL type="button" onClick={handleClick}>
					<SvgIcon variant="chevronLeftCircleOutline" size="45px" color="#6667ab" />
				</ListButtonL>
			)}
		</div>
	);
}
