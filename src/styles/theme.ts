import { DefaultTheme } from 'styled-components'

const typography = {
  display_2xl: {
    fontSize: '4.5rem',
    lineHeight: '5.625rem'
  },
  display_xl: {
    fontSize: '3.75rem',
    lineHeight: '4.625rem'
  },
  display_lg: {
    fontSize: '3rem',
    lineHeight: '3.75rem'
  },
  display_md: {
    fontSize: '2.25rem',
    lineHeight: '2.75rem'
  },
  display_sm: {
    fontSize: '1.875rem',
    lineHeight: '2.375rem'
  },
  display_xs: {
    fontSize: '1.5rem',
    lineHeight: '2rem'
  },
  text_xl: {
    fontSize: '1.25rem',
    lineHeight: '1.875rem'
  },
  text_lg: {
    fontSize: '1.125rem',
    lineHeight: '1.75rem'
  },
  text_md: {
    fontSize: '1rem',
    lineHeight: '1.5rem'
  },
  text_sm: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem'
  },
  text_xs: {
    fontSize: '0.75rem',
    lineHeight: '1.125rem'
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900
  }
}

// figure
const fg = 8

const shadow = {
  xs: '0px 1px 2px rgba(26, 26, 26, 0.05)',
  sm: '0px 1px 3px rgba(26, 26, 26, 0.1), 0px 1px 2px rgba(26, 26, 26, 0.06)',
  md: '0px 4px 8px -2px rgba(26, 26, 26, 0.1), 0px 2px 4px -2px rgba(26, 26, 26, 0.06)',
  lg: '0px 12px 16px -4px rgba(26, 26, 26, 0.1), 0px 4px 6px -2px rgba(26, 26, 26, 0.05)',
  xl: '0px 20px 24px -4px rgba(26, 26, 26, 0.1), 0px 8px 8px -4px rgba(26, 26, 26, 0.04)',
  xxl: '0px 24px 48px -12px rgba(26, 26, 26, 0.25)',
  xxxl: '0px 32px 64px -12px rgba(26, 26, 26, 0.2)'
}

const pointer = {
  cursor: 'pointer',
  userSelect: 'none',
  '&:focus': {
    outline: 'none'
  }
}

const defalutTheme = {
  typography,
  shadow,
  fg,
  pointer
}

export const lightTheme: DefaultTheme = {
  ...defalutTheme,
  theme: 'light'
}

export const darkTheme: DefaultTheme = {
  ...defalutTheme,
  theme: 'dark'
}
