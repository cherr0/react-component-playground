import styled, { css } from 'styled-components';
import { OptionalStyleRecord, StyleRecord } from '../../../styles/type';
import { typography } from '../../../styles/typography';
import { noneDraggable } from '../../../styles/mixin';
import { ButtonProps } from './type';
import { shadow } from '../../../styles/token';

const variantStyle: StyleRecord<NonNullable<ButtonProps['variant']>> = {
  contained: css`
    color: var(--white);
    background-color: var(--accent-button-default);

    :hover {
      background-color: var(--accent-button-hover);
    }
    :disabled {
      background-color: var(--accent-button-disabled);
    }
    :focus {
      background-color: var(--accent-button-focused);
    }
  `,
  outlined: css`
    color: var(--accent-button-default);
    background-color: transparent;
    border: 1px solid var(--accent-button-default);

    :hover {
      color: var(--accent-button-hover);
      border: 1px solid var(--accent-button-hover);
    }
    :disabled {
      color: var(--accent-button-disabled);
      border: 1px solid var(--accent-button-disabled);
    }
    :focus {
      color: var(--accent-button-focused);
      border: 1px solid var(--accent-button-focused);
    }
  `
};

const sizeStyle: StyleRecord<ButtonProps['size']> = {
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

const widthStyle: OptionalStyleRecord<ButtonProps['width']> = {
  fill: css`
    width: 100%;
  `,
  hug: css`
    width: fit-content;
  `
};

export const ButtonWrapper = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid;
  transition: border, color, background-color, 0.3s ease;

  ${noneDraggable};
  ${shadow.xs};
  ${({ variant }) => variantStyle[variant]};
  ${({ size }) => sizeStyle[size]};
  ${({ width, fixedWidth }) => {
    if (width === 'fixed') {
      return css`
        width: ${fixedWidth}px;
      `;
    }
    return widthStyle[width];
  }};
`;
