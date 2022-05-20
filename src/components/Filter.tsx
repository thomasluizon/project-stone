import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../pages/_app';

const FilterMenu = styled.button`
	cursor: pointer;
`;

const Filter = () => {
	const { categories }: any = useContext(ThemeContext);

	return (
		<FilterMenu>
			<h2>flavio</h2>
		</FilterMenu>
	);
};

export default Filter;
