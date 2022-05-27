import { useContext, useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';
import { ThemeContext } from '../pages/_app';
import styled from 'styled-components';
import { ICategory } from '../core/category';

const FilterMenuStyled = styled.ul`
	padding: 1rem;
	border-radius: 0.5rem;
	position: absolute;
	bottom: 3rem;
	right: 0;
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

interface FilterMenuProps {
	setFilter: (boolean: boolean) => void;
	handleCheck: (name: string, value: boolean, index: number) => void;
}

const FilterMenu = (props: FilterMenuProps) => {
	const { categories }: any = useContext(ThemeContext);
	const theme = useTheme();

	const closeMenu = (e: any) => {
		let close = false;

		e.path.forEach((e2: any) => {
			if (e2.id == 'filter-menu' || e2.id == 'filter-button') {
				close = true;
			}
		});

		props.setFilter(close);
	};

	useEffect(() => {
		window.addEventListener('click', closeMenu);
		return () => {
			window.removeEventListener('click', closeMenu);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<FilterMenuStyled theme={theme} id="filter-menu">
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
	);
};

export default FilterMenu;
