import { useContext, useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { ThemeContext } from '../pages/_app';

const FilterButton = styled.button`
	cursor: pointer;
	border: 1px solid ${props => props.theme.colors.white};
	padding: 0.5rem 1rem;
	border-radius: 0.4rem;
	&:hover {
		border-color: ${props => props.theme.colors.primary};
		color: ${props => props.theme.colors.primary};
	}
`;

const FilterMenu = styled.ul`
	padding: 1rem;
	border-radius: 0.5rem;
	position: absolute;
	bottom: 0;
	right: -8rem;
	border: 1px solid ${props => props.theme.colors.white};
	li {
		&:hover {
			color: ${props => props.theme.colors.primary};
			cursor: pointer;
		}
	}
`;

const Filter = () => {
	const [filter, setFilter] = useState(false);
	const { categories }: any = useContext(ThemeContext);
	const theme = useTheme();
	return (
		<>
			{filter && (
				<FilterMenu theme={theme}>
					{categories.map((category: string, index: number) => (
						<li key={index}>
							<input type="checkbox" readOnly /> {category}
						</li>
					))}
				</FilterMenu>
			)}
			<FilterButton onClick={() => setFilter(!filter)} theme={theme}>
				Filter
			</FilterButton>
		</>
	);
};

export default Filter;
