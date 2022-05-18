import type { NextPage } from 'next';
import Head from 'next/head';
import styled, { useTheme } from 'styled-components';

const Xuize = styled.div`
	background: red;
	${props => props.theme.flex('center', 'center')}
`;

const Home: NextPage = () => {
	const theme = useTheme();
	return (
		<>
			<Head>
				<title>Amazon - Home</title>
			</Head>
			<>
				<Xuize theme={theme}>
					<h1>xuize</h1>
				</Xuize>
			</>
		</>
	);
};

export default Home;
