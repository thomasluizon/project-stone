import { useContext, useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';
import { ThemeContext } from '../pages/_app';
import styled from 'styled-components';
import { ICategory } from '../core/category';

const FilterMenuStyled = styled.ul`
	padding: 1rem;
	border-radius: 0.5rem;
	position: absolute;
	bottom: 0;
	right: -8rem;
	border: 1px solid ${props => props.theme.colors.white};
	${props => props.theme.flexcol()};
	align-items: flex-start;
	li {
		${props => props.theme.flex()};
		gap: 0.5rem;
		&:hover {
			label {
				color: ${props => props.theme.colors.primary};
				cursor: pointer;
			}
		}
	}
`;

const FilterMenu = (props: any) => {
	const menu = useRef(null);

	useEffect(() => {
		const closeMenu = (e: any) => {
			console.log(e.target.parentElement);
			if (
				e.currentTarget !== menu.current &&
				e.target !== props.button.current
			) {
				props.setFilter(false);
			}
		};

		window.addEventListener('click', e => closeMenu(e));
		return () => window.removeEventListener('click', e => closeMenu(e));
	}, []);

	const { categories }: any = useContext(ThemeContext);
	const theme = useTheme();

	return (
		props.filter && (
			<FilterMenuStyled ref={menu} theme={theme}>
				{categories.map((category: ICategory, index: number) => (
					<li key={category.name}>
						<input
							type="checkbox"
							checked={category.isChecked}
							id={category.name}
							onChange={e =>
								props.handleCheck(category.name, e.target.checked, index)
							}
						/>
						<label htmlFor={category.name}>{category.name}</label>
					</li>
				))}
			</FilterMenuStyled>
		)
	);
};

export default FilterMenu;
