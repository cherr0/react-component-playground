import React, { HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { ButtonWrapper } from './style';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼의 스타일을 지정합니다.
   *
   * @default primary
   */
  variant?: 'contained' | 'outlined';
  /**
   * 버튼의 길이를 지정합니다.
   * @default hug
   */
  width?: 'fill' | 'hug' | 'fixed';
  /**
   * `variant`를 `fixed`로 지정한 경우,
   *
   * 해당 값을 주면 고정 길이를 지정할 수 있습니다.
   */
  fixedWidth?: number;
  /**
   * 버튼의 사이즈를 지정합니다.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 활성화 시 비활성화 상태로 변경됩니다.
   */
  disabled?: boolean;
  /**
   * 버튼에 들어갈 내용을 작성합니다.
   */
  children?: ReactNode;
  /**
   * 활성화 시 disabled 상태로 전환되며 로딩 아이콘이 표시됩니다.
   */
  loading?: boolean;
}

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
