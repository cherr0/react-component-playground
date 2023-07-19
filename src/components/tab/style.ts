import styled, { css } from 'styled-components';

import { typography } from '~/styles/token';
import { TabProps } from './type';
import { StyleRecord } from '~/styles/type';
import { noneDraggable } from '~/styles/mixin';

const wrapperVariantStyle: StyleRecord<TabProps['variant']> = {
  filled: css`
    gap: 8px;
    padding: 4px;
  `,
  lined: css`
    gap: 8px;
  `
};

export const TabsWrapper = styled.ul<{ variant: TabProps['variant'] }>`
  position: relative;
  display: flex;
  width: 100%;

  ${({ variant }) => wrapperVariantStyle[variant]}
`;

const unitVariantStyle = (
  variant: TabProps['variant']
): StyleRecord<TabProps['size']> => {
  switch (variant) {
    case 'filled':
      const filledProps = css`
        padding: 8px 12px;
      `;
      return {
        md: css`
          ${filledProps};
          ${typography.body_strong};
        `,
        lg: css`
          ${filledProps};
          ${typography.title};
        `
      };
    // case 'lined':
    default:
      const linedProps = css`
        padding: 8px;
      `;
      return {
        md: css`
          ${linedProps};
          ${typography.title_strong};
        `,
        lg: css`
          ${linedProps};
          ${typography.headline_strong};
        `
      };
  }
};

export const TabUnit = styled.li<{
  variant: TabProps['variant'];
  size: TabProps['size'];
  fixed: TabProps['fixed'];
  active?: boolean;
}>`
  cursor: pointer;
  color: var(${({ active }) => (active ? '--text-strong' : '--text-weak')});
  transition: color 0.2s ease;
  z-index: 1;
  white-space: nowrap;
  text-align: center;

  ${typography.body_strong};
  ${noneDraggable};

  ${({ variant, size }) => unitVariantStyle(variant)[size]};
  ${({ fixed }) =>
    fixed &&
    css`
      width: 100%;
    `}

  &:hover {
    color: var(--text-strong);
  }
`;

const sliderStyle = (
  variant: TabProps['variant']
): StyleRecord<TabProps['size']> => {
  switch (variant) {
    case 'filled':
      const filledProps = css`
        background-color: var(--border-weak);
        border-radius: 6px;
      `;
      return {
        md: css`
          ${filledProps};
          height: 36px;
        `,
        lg: css`
          ${filledProps};
          height: 44px;
        `
      };
    // case 'lined':
    default:
      const linedProps = css`
        bottom: 0;
        background-color: var(--icon-strong);
      `;
      return {
        md: css`
          ${linedProps};
          height: 2px;
        `,
        lg: css`
          ${linedProps};
          height: 4px;
        `
      };
  }
};

export const SliderUnit = styled.li<{
  variant: TabProps['variant'];
  size: TabProps['size'];
}>`
  position: absolute;
  left: 0;
  transition: transform, width, 0.3s ease;

  ${({ variant, size }) => sliderStyle(variant)[size]};
`;
