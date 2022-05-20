import styled, { useTheme } from 'styled-components';

const SearchForm = styled.div`
	${props => props.theme.flex()};
	overflow: hidden;
	border-radius: 0.5rem;
	height: 40px;
	border: 1px solid ${props => props.theme.colors.white};

	input {
		padding: 0rem 1rem;
		height: 100%;
		background-color: ${props => props.theme.colors.white};
		color: black;
	}

	button {
		padding: 0 1rem;
		height: 100%;
		cursor: pointer;
		i:before {
			transition: 0.2s color;
		}
		&:hover i:before {
			color: ${props => props.theme.colors.primary};
		}
	}
`;

interface SearchProps {
	handleSearch: (value: string) => void;
	inputValue: string;
}

const Search = (props: SearchProps) => {
	const theme = useTheme();

	return (
		<SearchForm theme={theme}>
			<input
				type="text"
				placeholder="Enter a name"
				value={props.inputValue}
				onChange={e => props.handleSearch(e.target.value)}
			/>
			<button>
				<i className="bi bi-search"></i>
			</button>
		</SearchForm>
	);
};

export default Search;
