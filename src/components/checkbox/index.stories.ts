import { Checkbox } from './index';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'common/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    children: 'Sample Text'
  },
  parameters: {
    docs: {
      description: {
        component: '사용자가 하나 이상의 옵션을 선택해야할 때 사용합니다.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {}
};
