import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
	flex: (justify?: string, align?: string) => {
		return `
         display: flex;
         align-items: ${align || 'center'};
         justify-content: ${justify || 'center'};
      `;
	},

	flexcol: () => {
		return `
		 		display: flex;
				flex-direction: column;
		 `;
	},
	colors: {
		bg: '#0d0e0d',
		grey: '#0D0F0D',
		white: '#E8E8E8',
		primary: '#41DB81',
		secondary: '#006B10',
		terciary: '#48A84E',
	},
};

export default theme;
