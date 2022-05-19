import styled from 'styled-components';

interface TitleProps {
	children: any;
}

const TitleStyled = styled.h2`
	font-size: 1.5rem;
	font-weight: lighter;
`;

const Title = (props: TitleProps) => {
	return <TitleStyled>{props.children}</TitleStyled>;
};

export default Title;
