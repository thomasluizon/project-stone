import styled from 'styled-components';

interface ContainerProps {
	children: any;
	maxWidth?: string;
	padding?: string;
}

const ContainerStyled = styled.div`
	margin: 0 auto;
	height: 100%;
	max-width: ${(props: ContainerProps) => props.maxWidth};
	padding: ${(props: ContainerProps) => props.padding};
`;

const Container = (props: ContainerProps) => {
	return (
		<ContainerStyled
			maxWidth={props.maxWidth || '960px'}
			padding={props.padding || '0 2rem'}
		>
			{props.children}
		</ContainerStyled>
	);
};

export default Container;
