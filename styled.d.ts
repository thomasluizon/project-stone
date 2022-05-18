import 'styled-components';

export interface DefaultTheme {
	flex: (justify: string, align: string) => string;
	flexcol: () => string;
	colors?: object;
}
