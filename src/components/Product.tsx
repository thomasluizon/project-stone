import styled, { useTheme } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

interface ProductProps {
	img: string;
	price: number;
	desc: string;
	name: string;
}

const ProductStyled = styled.div`
	${props => props.theme.flexcol()};
	img {
		width: 250px;
		height: 250px;
	}
	width: 30%;

	border-radius: 0.75rem;
	overflow: hidden;
	cursor: pointer;
	small {
		max-width: 300px;
		max-height: 100px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	&:hover {
		small {
			white-space: unset;
			text-overflow: unset;
		}
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
				<Image
					src={props.img}
					width="250px"
					height="250px"
					alt="Product Image"
				/>
				<div className="desc">
					<h3>{props.name}</h3>
					<p>{props.price}</p>
					<small>{props.desc}</small>
				</div>
			</ProductStyled>
		</Link>
	);
};

export default Product;
