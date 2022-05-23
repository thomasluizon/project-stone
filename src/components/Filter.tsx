import { useContext, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { ICategory } from '../core/category';
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

const Filter = () => {
	const [filter, setFilter] = useState(false);
	const { setCategories, categories }: any = useContext(ThemeContext);
	const theme = useTheme();

	const handleCheck = (name: string, value: boolean, index: number) => {
		const arr: ICategory[] = [...categories].filter(
			category => category.name !== name
		);

		arr.splice(index, 0, { name, isChecked: value });
		setCategories(arr);
	};

	return (
		<>
			{filter && (
				<FilterMenu theme={theme}>
					{categories.map((category: ICategory, index: number) => (
						<li key={category.name}>
							<input
								type="checkbox"
								checked={category.isChecked}
								id={category.name}
								onChange={e =>
									handleCheck(category.name, e.target.checked, index)
								}
							/>
							<label htmlFor={category.name}>{category.name}</label>
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
