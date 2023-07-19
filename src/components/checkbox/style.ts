import styled from 'styled-components';
import { typography } from '../../styles/token';

export const CheckboxWrapper = styled.label`
  display: flex;
  position: relative;
  gap: 8px;
  align-items: center;
  ${typography.body};
`;

export const InputUnit = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

export const CheckboxUnit = styled.span<{ color: string }>`
  width: 20px;
  height: 20px;
  background-color: var(--surface-default);
  border: 1px solid var(--icon-weak);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    transition: all 0.3s ease;
    background-color: var(--button-hover);
    border-radius: 4px;
  }

  input:checked + & {
    border: none;
    background-color: var(--${({ color }) => color});
  }
`;
