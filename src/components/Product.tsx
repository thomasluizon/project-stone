import styled from 'styled-components';
import Image from 'next/image';

const ProductStyled = styled.div``;

interface ProductProps {
	img: string;
}

const Product = (props: ProductProps) => {
	return (
		<ProductStyled>
			<Image src={props.img} alt="Product Image" />
		</ProductStyled>
	);
};

export default Product;
