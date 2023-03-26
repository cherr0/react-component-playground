import styled, { css } from 'styled-components';
import { BoxButtonProps } from './type';
import { StyleRecord } from '../../../styles/type';
import { typography } from '../../../styles/typography';

const variantStyle: StyleRecord<BoxButtonProps['variant']> = {
  contained: css`
    color: var(--white);
    background-color: var(--accent-button-default);

    :disabled {
      background-color: var(--accent-button-disabled);
    }
    :hover {
      background-color: var(--accent-button-hover);
    }
    :focus {
      background-color: var(--accent-button-focused);
    }
  `,
  outlined: css`
    color: var(--accent-button-default);
    background-color: transparent;
    border: 1px solid var(--accent-button-default);

    :disabled {
      color: var(--accent-button-disabled);
      border: 1px solid var(--accent-button-disabled);
    }
    :hover {
      color: var(--accent-button-hover);
      border: 1px solid var(--accent-button-hover);
    }
    :focus {
      color: var(--accent-button-focused);
      border: 1px solid var(--accent-button-focused);
    }
  `
};

const sizeStyle: StyleRecord<BoxButtonProps['size']> = {
  sm: css`
    padding: 4px 10px;
    ${typography.button_m};
  `,
  md: css`
    padding: 6px 16px;
    ${typography.button_l};
  `,
  lg: css`
    padding: 8px 22px;
    ${typography.button_l};
  `
};

export const BoxButtonWrapper = styled.button<BoxButtonProps>`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  transition: color, background-color, box-shadow, 0.3s ease;
  box-shadow: var(--shadow-md);
  border-radius: 4px;
  gap: 8px;

  :hover {
    box-shadow: var(--shadow-lg);
  }

  ${({ variant }) => variantStyle[variant]};
  ${({ size }) => sizeStyle[size]};
`;
