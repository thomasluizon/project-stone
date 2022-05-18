import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../global/theme';

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		margin: 0;
		padding: 0;
		font-size: 1rem;
		font-family: 'Poppins', sans-serif;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		border: none;
		outline: none;
		appearance: none;
	}
	body {
		background: red;
	}
`;

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />;
			</ThemeProvider>
		</>
	);
}

export default MyApp;
