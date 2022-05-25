/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import Container from '../global/Container';
import NavLink from './NavLink';
interface HeaderProps {
	unboundTransform: boolean;
}

const HeaderStyled = styled.header`
	background-color: ${props => props.theme.colors.grey};
	padding: 2rem 0;

	.wrapper {
		.logo {
			img {
				max-width: 100px;
			}
			${props => props.theme.flex()};
			gap: 1rem;
		}

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
	@media screen and (max-width: 768px) {
		nav.mobile {
			transform: translateX(0);
		}
		nav {
			z-index: 9000000;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			${props => props.theme.flex()}
			transform: translateX(-100%);
			${(props: HeaderProps) =>
				props.unboundTransform ? '' : 'transition: 0.2s transform;'}
			ul {
				flex-direction: column;
				a {
					font-size: 2rem;
				}
			}
		}
	}
`;

const Icon = styled.button`
	cursor: pointer;
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
	}
	.bi::before {
		font-size: 1.5rem;
		transition: 0.2s color;
	}

	&:hover {
		.bi::before {
			color: ${props => props.theme.colors.primary};
		}
	}

	.bi-x {
		position: absolute;
		right: 1.5rem;
		top: 1.5rem;

		&::before {
			font-size: 3rem;
		}
	}
`;

const Header = () => {
	const theme = useTheme();
	const [mobileDrawer, setMobileDrawer] = useState(false);
	const [unboundTransform, setUnboundTransform] = useState(true);

	useEffect(() => {
		mobileDrawer
			? document.body.classList.add('mobile')
			: document.body.classList.remove('mobile');
	}, [mobileDrawer]);

	return (
		<HeaderStyled unboundTransform={unboundTransform} theme={theme}>
			<Container>
				<div className="wrapper">
					<Link href="/">
						<a className="logo">
							<img src="/images/favicon.webp" alt="Logo pedra" /> (pedra)
						</a>
					</Link>
					<nav className={mobileDrawer ? 'mobile' : ''}>
						<ul>
							<NavLink href="/" setMobileDrawer={setMobileDrawer}>
								Home
							</NavLink>
							<NavLink href="/products/" setMobileDrawer={setMobileDrawer}>
								Products
							</NavLink>
							<NavLink href="/contact/" setMobileDrawer={setMobileDrawer}>
								Contact
							</NavLink>
							<NavLink href="/auth/login/" setMobileDrawer={setMobileDrawer}>
								Login
							</NavLink>
							<NavLink href="/auth/signup/" setMobileDrawer={setMobileDrawer}>
								Sign-up
							</NavLink>
							<Icon
								onClick={() => (
									setMobileDrawer(false),
									setTimeout(() => {
										setUnboundTransform(true);
									}, 200)
								)}
								theme={theme}
							>
								<i className="bi bi-x"></i>
							</Icon>
						</ul>
					</nav>
					<Icon
						onClick={() => (setMobileDrawer(true), setUnboundTransform(false))}
						theme={theme}
					>
						<i className="bi bi-list"></i>
					</Icon>
				</div>
			</Container>
		</HeaderStyled>
	);
};

export default Header;
