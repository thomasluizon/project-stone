import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../global/theme';
import Layout from '../components/Layout';

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
		background-color: ${theme.colors.bg};
		color: ${theme.colors.white};
		text-decoration: none;
		list-style: none;
	}
`;

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <GlobalStyle />
         <ThemeProvider theme={theme}>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </ThemeProvider>
      </>
   );
}

export default MyApp;
