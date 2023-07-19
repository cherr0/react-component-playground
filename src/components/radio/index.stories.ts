import { Radio } from './index';
import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

const meta: Meta<typeof Radio> = {
  title: 'common/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component:
          '사용자가 단 하나의 옵션을 선택해야할 때 사용하며, 다른 Radio Button 선택 시 기존 선택 옵션은 해제됩니다.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {}
};
