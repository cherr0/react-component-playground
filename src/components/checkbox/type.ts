import { HTMLAttributes } from 'react';

export interface ChecbokProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * Checkbox의 체크 상태를 결정합니다.
   */
  checked?: boolean;
  /**
   * Checkbox가 체크 상태가 될 때 배경색을 의미하며 디자인 토큰만 가능합니다.
   */
  color?: string;
}
