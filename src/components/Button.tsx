import { ButtonHTMLAttributes, ReactNode } from 'react'
import { DefaultColor, DefaultSize } from '../../types'
import { ButtonWrapper } from './Button.style'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: DefaultColor
  size?: DefaultSize
  children?: string | ReactNode
  onClick?: () => void
}

const Button = ({
  color = 'primary',
  size = 'md',
  children,
  onClick
}: Props) => {
  return (
    <ButtonWrapper color={color} size={size} onClick={onClick}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
