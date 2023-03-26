import React from 'react';
import { BoxButtonWrapper } from './style';
import { BoxButtonProps } from './type';

export const BoxButton = ({
  variant = 'contained',
  size = 'md',
  children,
  ...restProps
}: BoxButtonProps) => {
  return (
    <BoxButtonWrapper {...restProps} variant={variant} size={size}>
      {children}
    </BoxButtonWrapper>
  );
};
