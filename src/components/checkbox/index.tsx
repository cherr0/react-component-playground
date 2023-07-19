import React from 'react';
import { CheckboxUnit, CheckboxWrapper, InputUnit } from './style';
import { AnimatePresence, motion } from 'framer-motion';
import { ChecbokProps } from './type';

const CheckIcon = () => (
  <motion.svg viewBox='0 0 24 24'>
    <motion.path
      d='M20 6L9 17L4 12'
      stroke='#ffffff'
      fill='none'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      exit={{ pathLength: 0 }}
      transition={{ duration: 0.3 }}
    />
  </motion.svg>
);

export const Checkbox = ({
  id,
  checked = true,
  onChange,
  color = 'accent-button-default',
  children
}: ChecbokProps) => {
  return (
    <CheckboxWrapper htmlFor={id}>
      <InputUnit
        id={id}
        type='checkbox'
        checked={checked}
        onChange={onChange}
      />
      <CheckboxUnit color={color}>
        <AnimatePresence>{checked && <CheckIcon />}</AnimatePresence>
      </CheckboxUnit>
      {children}
    </CheckboxWrapper>
  );
};
