import { CSSProp, DefaultTheme } from 'styled-components'

const up = (
  value: 'maximum' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'minimum' | number
): CSSProp => `
    @media only screen and (min-width: ${value}px)
  `

const down = (
  value: 'maximum' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'minimum' | number
): CSSProp => `
@media only screen and (max-width: ${value}px)
`

const between = (
  minValue: 'maximum' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'minimum' | number,
  maxValue: 'maximum' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'minimum' | number
): CSSProp => `
    @media only screen and (min-width: ${minValue}px) and (max-width: ${maxValue}px)
  `

export const breakpoints = {
  up,
  down,
  between
}

export const defaultTheme: DefaultTheme = {
  breakpoints
}


