import { ThemeProvider } from 'styled-components'
import { useDarkMode } from 'storybook-dark-mode'

import GlobalStyle from '../src/styles/GlobalStyle'
import { lightTheme, darkTheme } from '../src/styles/theme'
import '../src/styles/_variables.css'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  sort: 'requiredFirst'
}
