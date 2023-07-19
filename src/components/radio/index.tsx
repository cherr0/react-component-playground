import React from 'react'
import { RadioProps } from './type'
import { Input, MarkRadio, SelectInputField } from './style'

export const Radio = ({ id, value, onChange, checked }: RadioProps) => {
  return (
    <SelectInputField htmlFor={id}>
      <Input
        type='radio'
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <MarkRadio />
      {value}
    </SelectInputField>
  )
}
