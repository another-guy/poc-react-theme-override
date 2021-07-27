import { ThemeProvider } from 'styled-components';
import { ITheme } from './theme';

export const CustomThemeProvider: React.FC<{ theme: ITheme }> = ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export const mainTheme: ITheme = {
  primaryColor: 'black',
  secondaryColor: 'yellow',
};

export const MainThemeProvider: React.FC = ({ children }) =>
  <CustomThemeProvider
    theme={mainTheme}
  >
    {children}
  </CustomThemeProvider>;

export const altTheme: ITheme = {
  primaryColor: 'white',
  secondaryColor: 'black',
}

export const AltThemeProvider: React.FC = ({ children }) =>
  <CustomThemeProvider
    theme={altTheme}
  >
    {children}
  </CustomThemeProvider>;
