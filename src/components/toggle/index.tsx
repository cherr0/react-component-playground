import React from 'react'
import { ToggleProps } from './type'
import { CircleUnit, ToggleWrapper } from './style'

export const Toggle = ({
  size = 'sm',
  checked = false,
  disabled = false,
  onClick
}: ToggleProps) => {
  return (
    <ToggleWrapper
      size={size}
      checked={checked}
      disabled={disabled}
      onClick={onClick}
    >
      <CircleUnit size={size} />
    </ToggleWrapper>
  )
}
