import styled, { useTheme } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { IProduct } from '../core/product';
interface ProductProps {
	img: string;
	price: number;
	desc: string;
	name: string;
	id: number;
	category: string;
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

		.desc__header {
			${props => props.theme.flex('space-between')}
			background: inherit;

			h3 {
				font-size: 1.2rem;
			}

			span {
				font-size: 0.8rem;
				border-radius: 4px;
				padding: 5px;
				display: inline-block;
			}
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
		<Link href={`/product/${props.id}`}>
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
					<div className="desc__header">
						<h3>{props.name}</h3>
						<span>{props.category}</span>
					</div>
					<p>$ {props.price}</p>
					<small>{props.desc}</small>
				</div>
			</ProductStyled>
		</Link>
	);
};

export default Product;
