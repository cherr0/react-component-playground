import styled, { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'storybook-dark-mode';

import GlobalStyle from '../src/styles/GlobalStyle';
import { darkTheme, lightTheme } from '../src/styles/theme';
import '../src/styles/foundation.css';
import { darkVariables, lightVariables } from '../src/styles/variable';

const Box = styled.div`
  ${({ theme }) => (theme.theme === 'light' ? lightVariables : darkVariables)};
`;

export const decorators = [
  (Story) => (
    <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
      <Box>
        <GlobalStyle />
        <Story />
      </Box>
    </ThemeProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  sort: 'requiredFirst'
};
