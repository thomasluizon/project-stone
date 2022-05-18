import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		flex: (justify: string, align: string) => string;
		flexcol: () => string;
		colors?: object;
	}
}
