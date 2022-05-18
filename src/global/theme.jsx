import styled from 'styled-components';

const theme = {
	container: styled.div`
		margin: 0 auto;
		height: 100%;
		max-width: ${props => props.maxWidth || '960px'};
		padding: ${props => props.padding || '0 1rem'};
		position: ${props => props.position || 'static'};
	`,

	flex: (justify, align) => {
		return `
         display: flex;
         align-items: ${align};
         justify-content: ${justify};
      `;
	},

	flexcol: () => {
		return `
		 		display: flex;
				flex-direction: column;
		 `;
	},
};

export default theme;
