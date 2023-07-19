import styled from 'styled-components';

export const SelectInputField = styled.label`
  display: flex;
  position: relative;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 44px;
  padding: 10px 16px;
  color: var(--text-strong);
  cursor: pointer;
`;
export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const MarkRadio = styled.span`
  position: relative;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: var(--accent-button-default);
  cursor: pointer;

  input:checked ~ &::after {
    transform: translate(-50%, -50%) scale(1);
  }

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background: var(--icon-on-accent);
    border-radius: 50%;
    transform-origin: center;
    transform: translate(-50%, -50%) scale(2);
    transition: transform 0.3s ease;
    background: white;
  }
`;
