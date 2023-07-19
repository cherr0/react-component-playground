import { Toggle } from './index';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof Toggle> = {
  title: 'common/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: '활성화 및 비활성화 상태로 구분되는 기능에 사용합니다.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {}
};
