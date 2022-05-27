import styled, { useTheme } from 'styled-components';

const SearchForm = styled.input`
	${props => props.theme.flex()};
	border-radius: 0.5rem;
	border: 1px solid ${props => props.theme.colors.white};

	padding: 0.5rem 1rem;
	background-color: ${props => props.theme.colors.white};
	color: black;
`;

interface SearchProps {
	handleSearch: (value: string) => void;
	inputValue: string;
}

const Search = (props: SearchProps) => {
	const theme = useTheme();

	return (
		<SearchForm
			theme={theme}
			type="text"
			placeholder="Enter a name"
			value={props.inputValue}
			onChange={e => props.handleSearch(e.target.value)}
		></SearchForm>
	);
};

export default Search;
