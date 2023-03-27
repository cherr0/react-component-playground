import { HTMLAttributes } from 'react';

export interface BoxButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: 'contained' | 'outlined';
  size: 'sm' | 'md' | 'lg';
}
