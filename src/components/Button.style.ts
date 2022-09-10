import styled, { css } from 'styled-components'
import { DefaultColor, DefaultSize } from '../../types'

export const ButtonWrapper = styled.button<{
  color: DefaultColor
  size: DefaultSize
}>`
  ${({ color }) => color === 'primary' && css``};

  ${({ color }) => color === 'secondary' && css``}
`
