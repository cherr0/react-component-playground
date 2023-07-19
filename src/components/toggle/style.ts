import styled, { css } from 'styled-components';
import { StyleRecord } from '~/styles/type';
import { ToggleProps } from './type';
import { shadow } from '~/styles/token';
import { motion } from 'framer-motion';

const sizeStyle: StyleRecord<ToggleProps['size']> = {
  sm: css`
    width: 36px;
    height: 20px;
  `,
  md: css`
    width: 44px;
    height: 24px;
  `
};

const circleSizeStyle: StyleRecord<ToggleProps['size']> = {
  sm: css`
    width: 16px;
    height: 16px;
  `,
  md: css`
    width: 20px;
    height: 20px;
  `
};

export const ToggleWrapper = styled(motion.div).attrs(() => ({
  layout: true,
  transition: { duration: 0.3 }
}))<{
  size: ToggleProps['size'];
  checked: ToggleProps['checked'];
  disabled: ToggleProps['disabled'];
}>`
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 12px;
  transition: background 0.3s ease;

  ${({ checked }) =>
    checked
      ? css`
          justify-content: flex-end;
          background: var(--accent-button-default);
        `
      : css`
          justify-content: flex-start;
          background: var(--border-weak);
        `}
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
  ${({ size }) => sizeStyle[size]}
`;

export const CircleUnit = styled(motion.div).attrs(() => ({
  layout: true,
  transition: { type: 'spring', stiffness: 700, damping: 30 }
}))<{
  size: ToggleProps['size'];
}>`
  background: var(--icon-on-accent);
  border-radius: 50%;
  ${({ size }) => circleSizeStyle[size]}
  ${shadow.sm}
`;
