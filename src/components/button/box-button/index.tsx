import React, { useEffect, useState } from 'react';
import { ButtonWrapper } from './style';
import { ButtonProps } from './type';

export const Button = ({
  width = 'hug',
  variant = 'contained',
  size = 'md',
  children,
  disabled,
  loading = false,
  ...restProps
}: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  return (
    <ButtonWrapper
      {...restProps}
      width={width}
      variant={variant}
      size={size}
      disabled={disabled || isLoading}
    >
      {children}
    </ButtonWrapper>
  );
};
