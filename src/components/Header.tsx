import Link from 'next/link';
import styled, { useTheme } from 'styled-components';
import Container from '../global/Container';
import Title from './Title';

const HeaderStyled = styled.header`
	background-color: ${props => props.theme.colors.grey};
	padding: 2rem 0;

	.wrapper {
		${props => props.theme.flex('space-between', 'center')}
		height: 100%;
	}

	ul {
		${props => props.theme.flex()}
		gap: 2rem;

		a {
			transition: 0.2s all;
			transition-property: color, transform;
			display: inline-block;
			&:hover {
				transform: translateX(2px);
				color: ${props => props.theme.colors.primary};
			}
		}
	}
`;

const Header = () => {
	const theme = useTheme();
	return (
		<HeaderStyled theme={theme}>
			<Container>
				<div className="wrapper">
					<Link href="/">
						<Title>Project Stone (pedra)</Title>
					</Link>
					<nav>
						<ul>
							<li>
								<Link href="/contact/">
									<a>Contact</a>
								</Link>
							</li>
							<li>
								<Link href="/auth/login/">
									<a>Login</a>
								</Link>
							</li>
							<li>
								<Link href="/auth/signup/">
									<a>Sign-up</a>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</Container>
		</HeaderStyled>
	);
};

export default Header;
