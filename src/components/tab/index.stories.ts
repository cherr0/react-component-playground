import { Tab } from './index';
import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

const meta: Meta<typeof Tab> = {
  title: 'common/Tab',
  component: Tab,
  args: {
    list: [
      'A-Short',
      'B-1',
      'C-Menu',
      'D-Page',
      'Showcase',
      'Upgrade',
      'Render'
    ]
  },
  argTypes: {
    size: {
      defaultValue: 'md',
      control: {
        type: 'radio'
      }
    },
    variant: {
      control: {
        disable: true
      }
    },
    fixed: {
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'Tab은 유사한 정보를 같은 페이지 내 그룹화하여 콘텐츠를 구성하는 경우 사용합니다.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Filled: Story = {
  args: {
    variant: 'filled'
  }
};

export const Lined: Story = {
  args: {
    variant: 'lined'
  }
};
