import styled, { useTheme } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

interface ProductProps {
	img: string;
	price: number;
	desc: string;
	name: string;
}

const ProductStyled = styled.div`
	${props => props.theme.flexcol()};
	width: 30%;
	border-radius: 0.75rem;
	overflow: hidden;
	cursor: pointer;
	transition: 0.3s height;
	height: 370px;

	&:hover {
		height: 500px;
	}

	.desc {
		${props => props.theme.flexcol()};
		gap: 0.5rem;
		background: #383838;
		padding: 1rem;
		h3 {
			font-size: 1.2rem;
		}

		p,
		small,
		h3 {
			background: inherit;
		}
	}
`;

const Product = (props: ProductProps) => {
	const theme = useTheme();
	return (
		<Link href="/">
			<ProductStyled theme={theme}>
				<div>
					<Image
						width="250px"
						height="250px"
						layout="responsive"
						src={props.img}
						alt="Stone image"
						sizes="50vw"
					/>
				</div>
				<div className="desc">
					<h3>{props.name}</h3>
					<p>$ {props.price}</p>
					<small>{props.desc}</small>
				</div>
			</ProductStyled>
		</Link>
	);
};

export default Product;
