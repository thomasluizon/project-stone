import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
	flex: (justify: string, align: string) => {
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
