import styled, { useTheme } from 'styled-components';
import Container from '../global/Container';

const FooterStyled = styled.footer`
	background-color: ${props => props.theme.colors.grey};
	padding: 2rem 0;

	.wrapper {
		${props => props.theme.flex('space-between', 'center')}
		height: 100%;
	}
`;

const Footer = () => {
	const theme = useTheme();
	return (
		<FooterStyled theme={theme}>
			<Container padding="0 2rem">
				<div className="wrapper">
					<p>&copy; All rights reserved {new Date().getFullYear()}.</p>
				</div>
			</Container>
		</FooterStyled>
	);
};

export default Footer;
